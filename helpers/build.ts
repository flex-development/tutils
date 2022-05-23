#!/usr/bin/env ts-node

/**
 * @file Helpers - Build CLI
 * @module helpers/build
 */

import { LogLevel } from '@flex-development/log'
import { trext } from '@flex-development/trext'
import { NodeEnv } from '@flex-development/tutils'
import tsTransformPaths from '@kadeluxe/ts-transform-paths'
import type { CustomTransformer } from '@kadeluxe/ts-transform-paths/dist/Types'
import ncc from '@vercel/ncc'
import ch from 'chalk'
import fs from 'node:fs/promises'
import path from 'node:path'
import { inspect } from 'node:util'
import replace from 'replace-in-file'
import sh from 'shelljs'
import trash from 'trash'
import * as tsc from 'tsc-prog'
import { logDiagnostics } from 'tsc-prog/dist/utils/log'
import ts from 'typescript'
import type { Argv } from 'yargs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import exec from './exec'
import logger from './logger'
import PKG from './pkg'

/** CLI options. */
interface Options {
  /**
   * See the commands that running `build` would run.
   *
   * @default false
   */
  dryRun?: boolean

  /** @see Options.dryRun */
  d?: Options['dryRun']

  /**
   * Name of build environment.
   *
   * @default NodeEnv.DEV
   */
  env?: NodeEnv

  /** @see Options.env */
  e?: Options['env']

  /**
   * Run preliminary `yarn install` if package contains build scripts.
   *
   * @default false
   */
  install?: boolean

  /** @see Options.install */
  i?: Options['install']

  /**
   * Create tarball at specified path.
   *
   * @default '%s-%v.tgz'
   */
  out?: string

  /** @see Options.out */
  o?: Options['out']

  /**
   * Run `prepack` script.
   *
   * @default false
   */
  prepack?: boolean

  /** @see Options.prepack */
  p?: Options['prepack']

  /**
   * Pack the project once build is complete.
   *
   * @default false
   */
  tarball?: boolean

  /** @see Options.tarball */
  t?: Options['tarball']
}

/** CLI arguments. */
type Args = Exclude<Argv<Options>['argv'], Promise<Options>>

/** @const {Argv<Options>} args - CLI arguments parser */
const args: Argv<Options> = yargs(hideBin(process.argv), process.cwd())
  .usage('$0 [options]')
  .option('dryRun', {
    alias: 'd',
    default: false,
    describe: 'see the commands that executing the build workflow would run',
    type: 'boolean'
  })
  .option('env', {
    alias: 'e',
    choices: ['production', 'test', 'development'],
    default: NodeEnv.DEV,
    describe: 'node environment',
    requiresArg: true,
    type: 'string'
  })
  .option('install', {
    alias: 'i',
    default: false,
    describe: 'run `yarn install` if package contains build scripts',
    type: 'boolean'
  })
  .option('out', {
    alias: 'o',
    default: '%s-%v.tgz',
    describe: 'create tarball at specified path',
    requiresArg: true,
    type: 'string'
  })
  .option('prepack', {
    alias: 'p',
    default: false,
    describe: 'run `prepack` script',
    type: 'boolean'
  })
  .option('tarball', {
    alias: 't',
    default: false,
    describe: 'pack the project once build is complete',
    type: 'boolean'
  })
  .alias('help', 'h')
  .alias('version', 'v')
  .pkgConf('build')
  .version(PKG.version)
  .wrap(98)

/**
 * Executes the package build workflow.
 *
 * @async
 *
 * @return {Promise<void>} Empty promise when complete
 */
async function build(): Promise<void> {
  /** @const {Args} argv - CLI arguments */
  const argv: Args = await args.argv

  // Log workflow start
  logger(
    argv,
    'starting build',
    [PKG.name, `[env=${argv.env},dry=${argv.dryRun}]`],
    LogLevel.INFO
  )

  try {
    // Type check source code
    exec('tsc -p tsconfig.prod.json --noEmit', argv.dryRun)
    logger(argv, 'type check source code')

    // Build project, convert output extensions, create bundles
    for (const format of ['cjs', 'esm', 'types']) {
      // Remove stale build directory
      !argv.dryRun && await trash([format])
      logger(argv, `remove stale ${format} directory`)

      // Get output extension
      const extension: 'cjs' | 'mjs' = `${format === 'cjs' ? 'c' : 'm'}js`

      // Build project
      if (!argv.dryRun) {
        // Log compilation start
        logger(argv, 'compilation started')

        /** @const {ts.Program} program - TypeScript program */
        const program: ts.Program = tsc.createProgramFromConfig({
          basePath: process.cwd(),
          configFilePath: `tsconfig.prod.${format}.json`
        })

        /** @const {CustomTransformer} transformer - Path transformer */
        const transformer: CustomTransformer = tsTransformPaths(program)

        /** @const {ts.EmitResult} emitted - Emitted files */
        const emitted: ts.EmitResult = program.emit(
          undefined,
          undefined,
          undefined,
          format === 'types',
          {
            afterDeclarations: [transformer.afterDeclarations!],
            before: [transformer.before!]
          }
        )

        /** @const {ts.Diagnostic[]} diagnostics - Diagnostics */
        const diagnostics = [
          ...ts.getPreEmitDiagnostics(program),
          ...emitted.diagnostics
        ]

        // Log diagnostics
        logDiagnostics(diagnostics, true)

        // Throw error if files weren't emitted
        if (!program.getCompilerOptions().noEmit && emitted.emitSkipped) {
          throw new Error('compilation failed')
        }

        // Log compilation result
        if (diagnostics.length > 0) {
          const message = `compilation done with ${diagnostics.length} errors`
          logger(argv, message, [], LogLevel.WARN)
        } else logger(argv, 'compilation successful')
      }

      /** @const {string} files - `replace.sync` glob */
      const files = `./${format}/**/*`

      // Remove 'node_modules' references
      replace.sync({ files, from: /([./]\W\S*)node_modules\//g, to: '' })

      // Fix cjs export syntax
      if (format === 'cjs') {
        replace.sync({
          files,
          from: /exports.default = (.+);/,
          to(_, mod): string {
            return `module.exports = ${mod};\nmodule.exports.default = ${mod};`
          }
        })
      }

      // Bundle project
      if (format !== 'types') {
        /** @const {string} wid - Workspace id (package name without scope) */
        const wid: string = PKG.name.split('/')[1]!

        /** @const {Promise<string>[]} BUNDLES - Bundle filenames */
        const BUNDLES: Promise<string>[] = [wid, `${wid}.min`].map(async n => {
          /** @const {string} bundle - Bundle filename */
          const bundle: string = `${format}/${n}.${extension}`

          /** @const {boolean} esm - ESM format check */
          const esm: boolean = format === 'esm'

          /** @const {string} filename - Entry point filename */
          const filename = 'src/index.ts'

          if (!argv.dryRun) {
            const { code } = await ncc(`${process.cwd()}/${filename}`, {
              esm,
              externals: [
                ...Object.keys(PKG.peerDependencies ?? {}),
                ...Object.keys(PKG.optionalDependencies ?? {})
              ],
              filename,
              minify: path.extname(n) === '.min',
              production: argv.env === NodeEnv.PROD,
              quiet: true,
              target: esm ? 'es2020' : 'es5',
              transpileOnly: true
            })

            await fs.writeFile(bundle, code, { flag: 'wx+' })
            await fs.copyFile(`${format}/index.d.ts`, `${format}/${n}.d.ts`)
            await replace.replaceInFile({
              files: bundle,
              from: ';// CONCATENATED MODULE: ./src/',
              to: ';// CONCATENATED MODULE: ../src/'
            })
          }

          return bundle
        })

        // Complete bundle promises
        logger(argv, `bundle ${format}`, await Promise.all(BUNDLES))

        // Convert TypeScript output to .cjs or .mjs
        !argv.dryRun && await trext<'js', typeof extension>(format, {
          absolute: /@(flex-development|unicornware)/,
          babel: { sourceMaps: 'inline' as const },
          from: 'js',
          pattern: /.js$/,
          to: extension
        })

        logger(argv, `use .${extension} extensions`)
      }
    }

    // Pack project
    if (argv.tarball) {
      /** @const {string[]} flags - `yarn pack` flags */
      const flags: string[] = [
        `${argv.dryRun ? '--dry-run' : ''}`,
        `--out ${argv.out}`,
        `${argv.install ? '--install-if-needed' : ''}`
      ]

      /** @const {boolean} has_postinstall - `postinstall` script check */
      const has_postinstall: boolean = !!PKG.scripts.postinstall

      /** @const {boolean} has_prepack - `postinstall` script check */
      const has_prepack: boolean = !!PKG.scripts.prepack

      /** @const {boolean} disable_prepack - Disable prepack script check */
      const disable_prepack: boolean = has_prepack && !argv.prepack

      // Disable postinstall script
      has_postinstall && exec('toggle-scripts -postinstall', argv.dryRun)
      has_postinstall && logger(argv, 'disable postinstall script')

      // Disable prepack script
      disable_prepack && exec('toggle-scripts -prepack', argv.dryRun)
      disable_prepack && logger(argv, 'disable prepack script')

      // Execute pack command
      exec(['yarn pack', flags.join(' ')].join(' '), argv.dryRun)
      logger(argv, 'create tarball')

      // Renable postinstall script
      has_postinstall && exec('toggle-scripts +postinstall', argv.dryRun)
      has_postinstall && logger(argv, 'renable postinstall script')

      // Renable prepack script
      disable_prepack && exec('toggle-scripts +prepack', argv.dryRun)
      disable_prepack && logger(argv, 'renable prepack script')
    }
  } catch (e: unknown) {
    const error = e as Error & { code?: number; stderr?: string }

    if (!error.stderr) logger(argv, error.message, [], LogLevel.ERROR)
    sh.echo(error.stderr ?? ch.red(inspect(error, false, null)))
    return void sh.exit(error.code ?? 1)
  }

  // Log workflow end
  logger(argv, 'build complete', [PKG.name], LogLevel.INFO)
  return void sh.exit(0)
}

void build()
