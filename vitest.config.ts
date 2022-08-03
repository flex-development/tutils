/**
 * @file Vitest Configuration
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import { NodeEnv } from '@flex-development/tutils'
import ci from 'is-ci'
import path from 'node:path'
import type { UserConfig } from 'vite'
import tsconfigpaths from 'vite-tsconfig-paths'
import GithubActionsReporter from 'vitest-github-actions-reporter'

/**
 * Creates a {@link UserConfig} object for test environments.
 *
 * @return {UserConfig} Vitest configuration options
 */
const config = (): UserConfig => {
  /**
   * Path to tsconfig file.
   *
   * @const {string} TSCONFIG_PATH
   */
  const TSCONFIG_PATH: string = path.resolve('tsconfig.tsnode.json')

  return {
    define: {
      'import.meta.env.CI': ci,
      'import.meta.env.NODE_ENV': JSON.stringify(NodeEnv.TEST)
    },
    mode: NodeEnv.TEST,
    plugins: [tsconfigpaths({ projects: [TSCONFIG_PATH] })],
    test: {
      allowOnly: !ci,
      clearMocks: true,
      coverage: {
        all: true,
        clean: true,
        exclude: [
          '**/__mocks__/**',
          '**/__tests__/**',
          '**/index.ts',
          'src/types/'
        ],
        extension: ['.ts'],
        include: ['src'],
        reporter: ['json-summary', 'lcov', 'text'],
        reportsDirectory: './coverage',
        skipFull: false
      },
      globalSetup: [
        './__tests__/setup/setup.ts',
        './__tests__/setup/teardown.ts'
      ],
      globals: true,
      hookTimeout: 10 * 1000,
      include: ['**/__tests__/*.spec.ts'],
      isolate: true,
      /**
       * Using `--coverage` results in a `Fatal error` if `maxThreads` **and**
       * `minThreads` sn't set to `1`.
       *
       * @see https://github.com/vitest-dev/vitest/issues/1171
       */
      maxThreads: 1,
      minThreads: 1,
      mockReset: true,
      outputFile: {
        json: './__tests__/report.json'
      },
      passWithNoTests: true,
      reporters: [
        'json',
        'verbose',
        ci ? new GithubActionsReporter() : './__tests__/reporters/notifier.ts'
      ],
      /**
       * Stores snapshots next to `file`'s directory.
       *
       * @param {string} file - Path to test file
       * @param {string} extension - Snapshot extension
       * @return {string} Custom snapshot path
       */
      resolveSnapshotPath(file: string, extension: string): string {
        return path.resolve(
          path.resolve(path.dirname(path.dirname(file)), '__snapshots__'),
          path.basename(file).replace(/\.spec.tsx?/, '') + extension
        )
      },
      restoreMocks: true,
      root: process.cwd(),
      setupFiles: ['./__tests__/setup/index.ts'],
      silent: false,
      snapshotFormat: {
        callToJSON: true,
        min: false,
        printFunctionName: true
      },
      testTimeout: 10 * 1000
    }
  }
}

export default config
