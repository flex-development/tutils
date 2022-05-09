#!/usr/bin/env ts-node

/**
 * @file CLI - Package Build Workflow
 * @module tools/cli/build-pkg
 */

import LogLevel from '@flex-development/log/enums/log-level.enum'
import type { TrextOptions } from '@flex-development/trext'
import { trext } from '@flex-development/trext'
import NodeEnv from '@flex-development/tutils/enums/node-env.enum'
import type { BuildOptions } from '@helpers/build'
import build, { args as bargs } from '@helpers/build'
import logger from '@helpers/logger'
import tsconfigCascade from '@helpers/tsconfig-cascade'
import tsTransformPaths from '@kadeluxe/ts-transform-paths'
import ncc from '@vercel/ncc'
import fs from 'node:fs/promises'
import path from 'node:path'
import replace from 'replace-in-file'
import trash from 'trash'
import type { BuildOptions as TsBuildOptions, TsConfig } from 'tsc-prog'
import * as tsc from 'tsc-prog'
import { logDiagnostics } from 'tsc-prog/dist/utils/log'
import ts from 'typescript'
import type { Argv } from 'yargs'

/**
 * Package build options.
 *
 * @extends {BuildOptions}
 */
export interface BuildPkgOptions extends BuildOptions {
  /**
   * Specify module build formats.
   *
   * @default ['cjs','esm','types']
   */
  formats?: BuildPkgFormat[]

  /** @see BuildPkgOptions.formats */
  f?: BuildPkgOptions['formats']
}

export type BuildPkgArgs = Argv<BuildPkgOptions>
export type BuildPkgArgv = Exclude<BuildPkgArgs['argv'], Promise<any>>
export type BuildPkgFormat = 'cjs' | 'esm' | 'types'

export type BuildFormatOptions = {
  build: TsBuildOptions
  trext: TrextOptions<'js', 'cjs' | 'mjs'>
}

/** @const {string[]} BUILD_FORMATS - Module build formats */
const BUILD_FORMATS: BuildPkgFormat[] = ['cjs', 'esm', 'types']

/** @const {BuildPkgArgs} args - CLI arguments parser */
const args = bargs
  .option('formats', {
    alias: 'f',
    choices: BUILD_FORMATS,
    default: BUILD_FORMATS,
    describe: 'specify module build format(s)',
    type: 'array'
  })
  .alias('version', 'v')
  .pkgConf('build-pkg') as BuildPkgArgs

/**
 * Executes the package build workflow.
 *
 * @async
 *
 * @return {Promise<void>} Empty promise when complete
 */
async function buildPackage(): Promise<void> {
  /** @const {BuildPkgArgv} opts - Build options */
  const opts = args.argv

  return void await build<BuildPkgOptions>(opts, async (argv, context) => {
    const { dryRun, env, formats = [] } = argv
    const { cwd, npm_package_name, pkg, pwd } = context

    // Build project, convert output extensions, create bundles
    for (const format of formats) {
      // Remove stale build directory
      !dryRun && await trash([format])
      logger(argv, `remove stale ${format} directory`)

      // Get config file suffix
      const suffix: `${string}.json` = `prod.${format}.json`

      // Get output extension
      const extension: 'cjs' | 'mjs' = `${format === 'cjs' ? 'c' : 'm'}js`

      // Get module format build options
      // See: https://github.com/jeremyben/tsc-prog
      // See: https://github.com/flex-development/trext
      const options: BuildFormatOptions = ((): BuildFormatOptions => {
        const tsconfig = ((): TsConfig => {
          const { include = [] } = tsconfigCascade([[cwd, 'prod.json']])
          const { compilerOptions = {}, exclude = [] } = tsconfigCascade([
            [pwd, 'json'],
            [pwd, 'prod.json'],
            [pwd, suffix]
          ])

          compilerOptions.outDir = format
          delete compilerOptions.rootDir

          return { compilerOptions, exclude, include }
        })()

        return {
          build: { ...tsconfig, basePath: cwd, clean: { outDir: true } },
          trext: {
            absolute: /@(flex-development|unicornware)/,
            babel: { sourceMaps: 'inline' as const },
            from: 'js',
            pattern: /.js$/,
            to: extension
          }
        }
      })()

      // Build project
      if (!dryRun) {
        // Log compilation start
        logger(argv, 'compilation started')

        // Create TypeScript program and path transformer
        // See: https://github.com/jeremyben/tsc-prog
        // See: https://github.com/Kadeluxe/zerollup
        const program = tsc.createProgramFromConfig(options.build)
        const transformer = tsTransformPaths(program)

        // Compile project
        const emit = program.emit(
          undefined,
          undefined,
          undefined,
          format === 'types',
          {
            afterDeclarations: [transformer.afterDeclarations!],
            before: [transformer.before!]
          }
        )

        // Get all diagnostics
        const diagnostics = [
          ...ts.getPreEmitDiagnostics(program),
          ...emit.diagnostics
        ]

        // Log diagnostics
        logDiagnostics(diagnostics, true)

        // Throw error if files weren't emitted
        if (!program.getCompilerOptions().noEmit && emit.emitSkipped) {
          throw new Error('compilation failed')
        }

        // Log compilation result
        if (diagnostics.length > 0) {
          const message = `compilation done with ${diagnostics.length} errors`
          logger(argv, message, [], LogLevel.WARN)
        } else logger(argv, 'compilation successful')
      }

      // Fix module paths
      const files = `./${options.build.compilerOptions!.outDir}/**/*`
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
        // Create workspace id (package name without scope)
        const wid = npm_package_name.split('/')[1]!

        // Create bundles
        // See: https://github.com/vercel/ncc
        const BUNDLES = [wid, `${wid}.min`].map(async name => {
          const bundle = `${format}/${name}.${extension}`
          const esm = format === 'esm'
          const filename = 'src/index.ts'

          if (!dryRun) {
            const { code } = await ncc(`${cwd}/${filename}`, {
              esm,
              externals: [
                ...Object.keys(pkg.optionalDependencies ?? {}),
                ...Object.keys(pkg.peerDependencies ?? {})
              ],
              filename,
              minify: path.extname(name) === '.min',
              production: env === NodeEnv.PROD,
              quiet: true,
              target: esm ? 'es2020' : options.build.compilerOptions!.target,
              // ! type check already performed above
              transpileOnly: true
            })

            await fs.writeFile(bundle, code, { flag: 'wx+' })
            await fs.copyFile(`${format}/index.d.ts`, `${format}/${name}.d.ts`)
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
        !dryRun && await trext<'js', typeof extension>(format, options.trext)
        logger(argv, `use .${extension} extensions`)
      }
    }
  })
}

void buildPackage()
