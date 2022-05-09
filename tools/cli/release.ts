#!/usr/bin/env ts-node

/**
 * @file CLI - Release Workflow
 * @module tools/cli/release
 */

import grease from '@flex-development/grease'
import type { IGreaseOptions } from '@flex-development/grease/interfaces'
import LogLevel from '@flex-development/log/enums/log-level.enum'
import logger from '@helpers/logger'
import ch from 'chalk'
import { inspect } from 'node:util'
import sh from 'shelljs'
import type { Argv } from 'yargs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

/**
 * Package release options.
 */
export interface ReleaseOptions {
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

  /**
   * Is this the first release?
   *
   * @default false
   */
  firstRelease?: IGreaseOptions['firstRelease']

  /**
   * Only populate commits made under this path.
   *
   * @default process.cwd()
   */
  path?: IGreaseOptions['path']

  /**
   * Create prerelease with optional tag id (e.g: `alpha`,`beta`, `dev`).
   */
  prerelease?: IGreaseOptions['prerelease']

  /**
   * Specify release type (like `npm version <major|minor|patch>`).
   */
  releaseAs?: IGreaseOptions['releaseAs']

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

export interface ReleaseOptionsWithAliases extends ReleaseOptions {
  /** @see ReleaseOptions.commitAll */
  a?: ReleaseOptions['commitAll']

  /** @see ReleaseOptions.dryRun */
  d?: ReleaseOptions['dryRun']

  /** @see ReleaseOptions.firstRelease */
  f?: ReleaseOptions['firstRelease']

  /** @see ReleaseOptions.path */
  p?: ReleaseOptions['path']

  /** @see ReleaseOptions.releaseAs */
  r?: ReleaseOptions['releaseAs']
}

export type ReleaseArgs = Argv<ReleaseOptionsWithAliases>
export type ReleaseArgv = Exclude<ReleaseArgs['argv'], Promise<any>>

/** @const {string} workspace - Workspace name */
const workspace: string = process.env.npm_package_name!

/** @const {string} workspace_no_scope - Workspace name without scope */
const workspace_no_scope: string = workspace.split('/')[1]!

/** @const {ReleaseArgs} args - CLI arguments parser */
const args = yargs(hideBin(process.argv), process.env.INIT_CWD)
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
  .pkgConf('release')
  .wrap(98) as ReleaseArgs

/** @const {ReleaseArgv} args - CLI arguments */
const argv = args.argv as ReleaseArgv

/** @const {IGreaseOptions} options - `grease` options */
const options: IGreaseOptions = {
  commitAll: true,
  gitTagFallback: false,
  gitdir: process.env.PROJECT_CWD,
  lernaPackage: workspace_no_scope,
  releaseAssets: ['./*.tgz'],
  releaseBranchWhitelist: ['release/*'],
  releaseCommitMessageFormat: `release: ${workspace}@{{currentTag}}`,
  scripts: {
    postchangelog: `yarn pack -o %s-%v.tgz ${(argv.d && '-n') ?? ''}`.trim(),
    postcommit: 'git pnv',
    postgreaser: 'trash *.tgz',
    prerelease: 'yarn test'
  },
  // `continuous-deployment` workflow will create new tag
  skip: { tag: true },
  skipUnstable: false,
  tagPrefix: `${workspace_no_scope}@`,
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
  'starting release workflow',
  [workspace, `[dry=${argv.dryRun}]`],
  LogLevel.INFO
)

// Run release workflow
grease(Object.assign({}, options, argv)).catch((e: unknown) => {
  if ((e as Error & { stderr?: string }).stderr) return
  else sh.echo(ch.bold.red(inspect(e, false, null)))
})
