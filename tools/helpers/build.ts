#!/usr/bin/env ts-node

/**
 * @file Helpers - build
 * @module tools/helpers/build
 */

import LogLevel from '@flex-development/log/enums/log-level.enum'
import NodeEnv from '@flex-development/tutils/enums/node-env.enum'
import ch from 'chalk'
import { inspect } from 'node:util'
import type { PackageJson } from 'read-pkg'
import readPkg from 'read-pkg'
import sh from 'shelljs'
import type { Argv } from 'yargs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import exec from './exec'
import logger from './logger'

/**
 * Build options.
 */
export interface BuildOptions {
  /**
   * See the commands that running `build` would run.
   *
   * @default false
   */
  dryRun?: boolean

  /**
   * Name of build environment.
   *
   * @default NodeEnv.DEV
   */
  env?: NodeEnv

  /**
   * Run preliminary `yarn install` if package contains build scripts.
   *
   * @default false
   */
  install?: boolean

  /**
   * Create tarball at specified path.
   *
   * @default '%s-%v.tgz'
   */
  out?: string

  /**
   * Run `prepack` script.
   *
   * @default false
   */
  prepack?: boolean

  /**
   * Pack the project once build is complete.
   *
   * @default false
   */
  tarball?: boolean
}

/**
 * Build options with command aliases.
 *
 * @extends {BuildOptions}
 */
export interface BuildOptionsWithAliases extends BuildOptions {
  /** @see BuildOptions.dryRun */
  d?: BuildOptions['dryRun']

  /** @see BuildOptions.env */
  e?: BuildOptions['env']

  /** @see BuildOptions.install */
  i?: BuildOptions['install']

  /** @see BuildOptions.out */
  o?: BuildOptions['out']

  /** @see BuildOptions.prepack */
  p?: BuildOptions['prepack']

  /** @see BuildOptions.tarball */
  t?: BuildOptions['tarball']
}

export type BuildArgs = Argv<BuildOptionsWithAliases>
export type BuildArgv = BuildArgs['argv']

export type BuildContext = {
  cwd: ReturnType<typeof process['cwd']>
  npm_package_name: string
  pkg: PackageJson
  pwd: string
}

export type BuildWorflow<O extends BuildOptions = BuildOptions> = (
  argv: O,
  context: BuildContext
) => any

/** @const {BuildContext} context - Build context */
export const CTX: BuildContext = {
  cwd: process.cwd(),
  npm_package_name: process.env.npm_package_name!,
  pkg: readPkg.sync({ cwd: process.cwd(), normalize: false }),
  pwd: process.env.PROJECT_CWD!
}

/** @const {BuildArgs} args - CLI arguments parser */
export const args = yargs(hideBin(process.argv), CTX.cwd)
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
  .wrap(98) as BuildArgs

/**
 * Executes a build `workflow`.
 *
 * @template O - Shape of build options
 *
 * @async
 *
 * @param {O | Promise<O>} [argv] - Build options
 * @param {BuildWorflow<O>} [workflow] - Workflow function
 * @return {Promise<void>} Empty promise when complete
 */
async function build<O extends BuildOptions = BuildOptions>(
  argv: O | Promise<O>,
  workflow?: BuildWorflow<O>
): Promise<void> {
  const { dryRun, env, tarball } = argv = await argv

  // Log workflow start
  logger(
    argv,
    'starting build workflow',
    [CTX.npm_package_name, `[env=${env},dry=${dryRun}]`],
    LogLevel.INFO
  )

  try {
    // Type check source code
    exec(`tsc -p ${CTX.cwd}/tsconfig.prod.json --noEmit`, dryRun)
    logger(argv, 'type check source code')

    // Execute build workflow
    if (workflow) await workflow(argv, CTX)

    // Pack project
    if (tarball) {
      const { install, out: outFile, prepack } = argv

      // Pack command flags
      const flags = [
        `${dryRun ? '--dry-run' : ''}`,
        `--out ${outFile}`,
        `${install ? '--install-if-needed' : ''}`
      ]

      // Check if package has postinstall and prepack scripts
      const has_postinstall = typeof CTX.pkg.scripts?.postinstall === 'string'
      const has_prepack = typeof CTX.pkg.scripts?.prepack === 'string'

      // Check if prepack script should be disabled
      const disable_prepack = has_prepack && !prepack

      // Disable postinstall script
      has_postinstall && exec('toggle-scripts -postinstall', dryRun)
      has_postinstall && logger(argv, 'disable postinstall script')

      // Disable prepack script
      disable_prepack && exec('toggle-scripts -prepack', dryRun)
      disable_prepack && logger(argv, 'disable prepack script')

      // Execute pack command
      exec(['yarn pack', flags.join(' ')].join(' '), dryRun)
      logger(argv, 'create tarball')

      // Renable postinstall script
      has_postinstall && exec('toggle-scripts +postinstall', dryRun)
      has_postinstall && logger(argv, 'renable postinstall script')

      // Renable prepack script
      disable_prepack && exec('toggle-scripts +prepack', dryRun)
      disable_prepack && logger(argv, 'renable prepack script')
    }
  } catch (e: unknown) {
    const error = e as Error & { code?: number; stderr?: string }

    if (!error.stderr) logger(argv, error.message, [], LogLevel.ERROR)
    sh.echo(error.stderr ?? ch.red(inspect(error, false, null)))
    return void sh.exit(error.code ?? 1)
  }

  // Log workflow end
  logger(argv, 'build workflow complete', [CTX.npm_package_name], LogLevel.INFO)
  return void sh.exit(0)
}

export default build
