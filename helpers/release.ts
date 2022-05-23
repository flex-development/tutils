#!/usr/bin/env ts-node

/**
 * @file Helpers - Release CLI
 * @module helpers/release
 */

import grease from '@flex-development/grease'
import type { IGreaseOptions } from '@flex-development/grease/interfaces'
import { LogLevel } from '@flex-development/log'
import ch from 'chalk'
import { inspect } from 'node:util'
import sh from 'shelljs'
import type { Argv } from 'yargs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import logger from './logger'
import PKG from './pkg'

/** CLI options. */
interface Options {
  /**
   * Commit all staged changes, not just release files.
   *
   * @default true
   */
  commitAll?: IGreaseOptions['commitAll']

  /**
   * See the commands that running release would run.
   *
   * @default false
   */
  dryRun?: IGreaseOptions['dryRun']

  /** @see Options.dryRun */
  d?: Options['dryRun']

  /**
   * Is this the first release?
   *
   * @default false
   */
  firstRelease?: IGreaseOptions['firstRelease']

  /** @see Options.firstRelease */
  f?: Options['firstRelease']

  /**
   * Only populate commits made under this path.
   *
   * @default process.cwd()
   */
  path?: IGreaseOptions['path']

  /** @see Options.path */
  p?: Options['path']

  /**
   * Create prerelease with optional tag id (e.g: `alpha`,`beta`, `dev`).
   */
  prerelease?: IGreaseOptions['prerelease']

  /**
   * Specify release type (like `npm version <major|minor|patch>`).
   */
  releaseAs?: IGreaseOptions['releaseAs']

  /** @see Options.releaseAs */
  r?: Options['releaseAs']

  /**
   * Save GitHub release as a draft instead of publishing it.
   *
   * @default true
   */
  releaseDraft?: IGreaseOptions['releaseDraft']

  /**
   * Map of steps in the release process that should be skipped.
   *
   * @default true
   */
  skip?: IGreaseOptions['skip']
}

/** CLI arguments. */
type Args = Exclude<Argv<Options>['argv'], Promise<Options>>

/** @const {string} WORKSPACE_NO_SCOPE - `PKG.name` name without scope */
const WORKSPACE_NO_SCOPE: string = PKG.name.split('/')[1]!

/** @const {Argv<Options>} args - CLI arguments parser */
const args: Argv<Options> = yargs(hideBin(process.argv), process.cwd())
  .usage('$0 [options]')
  .option('commitAll', {
    alias: 'a',
    default: true,
    describe: 'commit all staged changes, not just release files',
    type: 'boolean'
  })
  .option('dryRun', {
    alias: 'd',
    default: false,
    describe: 'see the commands that running release would run',
    type: 'boolean'
  })
  .option('firstRelease', {
    alias: 'f',
    default: false,
    describe: 'is this the first release?',
    type: 'boolean'
  })
  .option('path', {
    alias: 'p',
    default: process.cwd(),
    describe: 'only populate commits made under this path',
    type: 'string'
  })
  .option('prerelease', {
    describe: 'create prerelease with optional tag id',
    requiresArg: true,
    type: 'string'
  })
  .option('releaseAs', {
    alias: 'r',
    describe: 'specify release type (like npm version <major|minor|patch>)',
    requiresArg: true,
    type: 'string'
  })
  .option('releaseDraft', {
    default: true,
    describe: 'release as a draft instead of publishing it',
    type: 'boolean'
  })
  .option('skip', {
    describe: 'map of steps in the release process that should be skipped',
    type: 'array'
  })
  .alias('help', 'h')
  .alias('version', 'v')
  .pkgConf('release')
  .version(PKG.version)
  .wrap(98) as Argv<Options>

/** @const {Args} args - CLI arguments */
const argv: Args = args.argv as Args

/** @const {IGreaseOptions} options - `grease` options */
const options: IGreaseOptions = {
  commitAll: true,
  gitTagFallback: false,
  gitdir: process.cwd(),
  lernaPackage: WORKSPACE_NO_SCOPE,
  releaseAssets: ['./*.tgz'],
  releaseBranchWhitelist: ['release/*'],
  releaseCommitMessageFormat: `release: ${PKG.name}@{{currentTag}}`,
  scripts: {
    postchangelog: `yarn pack -o %s-%v.tgz${(argv.dryRun && ' -n') ?? ''}`,
    postcommit: 'git pnv',
    postgreaser: 'trash *.tgz',
    prerelease: 'yarn test'
  },
  // `continuous-deployment` workflow will create new tag
  skip: { tag: true },
  skipUnstable: false,
  tagPrefix: `${WORKSPACE_NO_SCOPE}@`,
  types: [
    /* eslint-disable sort-keys */
    { type: 'feat', section: ':sparkles: Features' },
    { type: 'fix', section: ':bug: Fixes' },
    { type: 'revert', section: ':rewind: Revert' },
    { type: 'test', section: ':robot: Testing' },
    { type: 'docs', section: ':book: Documentation' },
    { type: 'build', section: ':hammer: Build' },
    { type: 'refactor', section: ':recycle: Code Improvements' },
    { type: 'perf', section: ':zap: Performance Updates' },
    { type: 'style', section: ':nail_care: Formatting & Structure' },
    { type: 'ci', section: ':truck: Continuous Integration & Deployment' },
    { type: 'chore', section: ':pencil2: Housekeeping' },
    { type: 'wip', hidden: true }
    /* eslint-enable sort-keys */
  ],
  verify: false
}

// Log workflow start
logger(
  argv,
  'starting release',
  [PKG.name, `[dry=${argv.dryRun}]`],
  LogLevel.INFO
)

// Run release workflow
grease(Object.assign({}, options, argv)).catch((e: unknown) => {
  if ((e as Error & { stderr?: string }).stderr) return
  else sh.echo(ch.bold.red(inspect(e, false, null)))
})
