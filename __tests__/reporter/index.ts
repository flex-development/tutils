/**
 * @file Tests - Reporter
 * @module tests/reporter
 * @see https://mochajs.org/api/tutorial-custom-reporter.html
 */

import { ObjectEmpty } from '@flex-development/tutils'
// @ts-expect-error ts(7016)
import growl from 'growl'
import ci from 'is-ci'
import {
  MochaOptions,
  reporters,
  Runner,
  Stats,
  Suite,
  Test
} from 'mocha'
import fs from 'node:fs'
import { Report, ReporterOptions } from 'tests/interfaces'

/**
 * Writes test results to a `json` file and sends a [notification][1] when all
 * tests have been ran.
 *
 * [1]: https://github.com/growl/growl
 *
 * @extends {reporters.Spec}
 */
class Reporter extends reporters.Spec {
  /**
   * @public
   * @static
   * @member {boolean} CI - Continuous integration server check
   */
  public static CI: boolean = ci && JSON.parse(process.env.CI ?? 'false')

  /**
   * @public
   * @static
   * @member {string} DEFAULT_REPORT_FILENAME - Default output filename
   */
  public static DEFAULT_REPORT_FILENAME: string = '__tests__/report.json'

  /**
   * Creates a new reporter that writes results to a `json` file and sends a
   * notification when all tests have been ran.
   *
   * @param {Runner} runner - Runner instance
   * @param {MochaOptions} options - Mocha options
   * @param {ReporterOptions} [options.reporterOptions] - Reporter options
   * @param {string} [options.reporterOptions.filename] - Output filename
   */
  constructor(runner: Runner, options: MochaOptions) {
    super(runner, options)

    /** @const {Record<string, Suite>} suites_map - Suite object map */
    const suites_map: Record<string, Suite> = {}

    /** @const {Test[]} tests - Test objects */
    const tests: Test[] = []

    // Add suite objects to suites array
    runner.on(Runner.constants.EVENT_SUITE_END, suite => {
      if (!suite.root) suites_map[suite.title] = suite
    })

    // Add test objects to tests array
    runner.on(Runner.constants.EVENT_TEST_END, test => {
      if (test.file && test.title) tests.push(test)
    })

    // Write report + send notification once all tests have ran
    runner.once(Runner.constants.EVENT_RUN_END, () => {
      /** @const {string[]} files - Test filenames */
      const files = [...new Set(tests.map(r => r.file!)).values()]

      /** @const {Record<string, Test[]>} tests_map - Test objects map */
      const tests_map: Record<string, Test[]> = {}

      // Map test objects to filenames
      for (const f of files) tests_map[f] = tests.filter(s => s.file === f)

      /** @const {Report} report - Test report */
      const report = Reporter.reportCreate(
        this.stats,
        suites_map,
        tests_map
      )

      // Write report
      Reporter.reportDump(report, options.reporterOptions as ReporterOptions)

      // Send notification
      if (!Reporter.CI) Reporter.notify(runner)
    })
  }

  /**
   * Displays a notification.
   *
   * @public
   * @static
   *
   * @param {Runner} runner - Runner instance
   * @return {void} Nothing when complete
   */
  public static notify(runner: Runner): void {
    // Do nothing in continuous integration environment
    if (this.CI) return

    /** @const {Stats} stats - {@link runner} stats */
    const stats: Stats = runner.stats!

    /** @var {string} message - Notification message */
    let message: string = ''

    /** @var {string} title - Notification title */
    let title: string = ''

    // Get notification title and message based on number of failed tests
    if (stats.failures) {
      message = `\u274C ${stats.failures} of ${stats.tests} tests failed`
      title = 'Failed'
    } else {
      message = `\u2705 ${stats.passes} tests passed in ${stats.duration}ms`
      title = 'Passed'
    }

    // Send notification
    growl(message, {
      image: './mocha-logo-96.png',
      name: 'mocha',
      title
    })
  }

  /**
   * Creates a `Report` object.
   *
   * @public
   * @static
   *
   * @param {Stats} stats - Stats object
   * @param {Record<string, Suite>} [suites_map={}] - Test suites map
   * @param {Record<string, Test[]>} [tests_map={}] - Tests map
   * @return {Report} Report object
   */
  public static reportCreate(
    stats: Stats,
    suites_map: Record<Suite['title'], Suite> = {},
    tests_map: Record<NonNullable<Test['file']>, Test[]> = {}
  ): Report {
    return {
      stats,
      results: Object.entries(tests_map).map(([file, tests]) => {
        const s = suites_map[tests[0]!.titlePath()[0]!]!

        return {
          __mocha_id__: s['__mocha_id__'],
          file,
          title: s.title,
          isPending: s.isPending(),
          bail: s['_bail'],
          assertionResults: tests.map(t => ({
            __mocha_id__: t['__mocha_id__'],
            body: t.body,
            currentRetry: t['currentRetry'](),
            duration: t.duration,
            err: t.err ?? null,
            failureMessages: t.err ? [t.err.message] : [],
            file: t.file!,
            fullTitle: t.fullTitle(),
            isPending: t.isPending() || false,
            parent: (() => {
              if (!t.parent) return

              return {
                __mocha_id__: t.parent['__mocha_id__'],
                fullTitle: t.parent.fullTitle()
              }
            })(),
            speed: t.speed,
            state: t.state,
            status: t.isPending() ? 'pending' : t.state ?? 'pending',
            title: t.title,
            titlePath: t.titlePath()
          }))
        }
      }),
      suites: Object.values(suites_map).map(s => ({
        __mocha_id__: s['__mocha_id__'],
        _bail: s['_bail'],
        parent: s.parent!['__mocha_id__'],
        root: s.root || false,
        title: s.title
      }))
    }
  }

  /**
   * Writes `report` to `options.filename` or {@link DEFAULT_REPORT_FILENAME}.
   *
   * @public
   * @static
   *
   * @param {Report | ObjectEmpty} [report={}] - Report object
   * @param {ReporterOptions} [options={}] - Reporter options
   * @return {void} Nothing when complete
   */
  public static reportDump(
    report: ObjectEmpty | Report = {},
    options: ReporterOptions = {}
  ): void {
    return void fs.writeFileSync(
      options.filename ?? this.DEFAULT_REPORT_FILENAME,
      JSON.stringify(report, null, 2)
    )
  }
}

export = Reporter
