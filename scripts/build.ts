#!/usr/bin/env node

import log from '@flex-development/grease/utils/log.util'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'
import fixNodeModulePaths from './fix-node-module-paths'
import exec from './utils/exec'
import { $name } from './utils/pkg-get'

/**
 * @file Scripts - Package Build Workflow
 * @module scripts/build
 */

export type BuildPackageOptions = {
  /**
   * See the commands that running `build` would run.
   */
  dryRun?: boolean

  /**
   * Specify module build formats.
   */
  formats?: ('cjs' | 'esm')[]
}

/**
 * @property {string[]} BUILD_FORMATS - Module build formats
 */
const BUILD_FORMATS: BuildPackageOptions['formats'] = ['cjs', 'esm']

/**
 * @property {yargs.Argv} args - Command line arguments parser
 * @see https://github.com/yargs/yargs
 */
const args = yargs(hideBin(process.argv))
  .usage('$0 [options]')
  .option('dry-run', {
    alias: 'd',
    boolean: true,
    default: false,
    describe: 'see the commands that running build would run',
    type: 'boolean'
  })
  .option('formats', {
    alias: 'f',
    array: true,
    choices: BUILD_FORMATS,
    default: BUILD_FORMATS,
    description: 'specify module build format(s)'
  })
  .alias('version', 'v')
  .alias('help', 'h')
  .pkgConf('build')
  .wrap(98)

/**
 * @property {BuildPackageOptions} argv - Command line arguments
 */
const argv: BuildPackageOptions = args.argv as BuildPackageOptions

// Log workflow start
log(argv, 'starting build workflow', [$name, `[dry=${argv.dryRun}]`], 'info')

// Build project with ttypescript - https://github.com/cevek/ttypescript
argv.formats?.forEach(format => {
  // Remove stale directory
  exec(`rimraf ${format}`, argv.dryRun)
  log(argv, `remove stale ${format} directory`)

  // Get tsconfig config file
  const tsconfig: string = `tsconfig.prod.${format}.json`

  // Run build command
  if (exec(`ttsc -p ${tsconfig}`, argv.dryRun) || argv.dryRun) {
    log(argv, `create ${format}`)
  }
})

// Fix node module import paths
fixNodeModulePaths()

// Log workflow end
log(argv, 'build workflow complete', [$name], 'info')
