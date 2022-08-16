/**
 * @file Unbuild Config
 * @module config/unbuild
 * @see https://github.com/unjs/unbuild#configuration
 */

import type { MkdistOptions } from 'mkdist'
import path from 'node:path'
import { applyChanges } from 'resolve-tspaths/dist/steps/applyChanges'
import { computeAliases } from 'resolve-tspaths/dist/steps/computeAliases'
import { generateChanges } from 'resolve-tspaths/dist/steps/generateChanges'
import { getFilesToProcess } from 'resolve-tspaths/dist/steps/getFilesToProcess'
import { loadTSConfig } from 'resolve-tspaths/dist/steps/loadTSConfig'
import type { Alias, Change, TextChange } from 'resolve-tspaths/dist/types'
import {
  defineBuildConfig,
  type BuildConfig,
  type BuildContext,
  type BuildOptions,
  type MkdistBuildEntry
} from 'unbuild'

/** @const {BuildConfig} config - Build config */
const config: BuildConfig = defineBuildConfig({
  declaration: true,
  entries: [
    { builder: 'mkdist', input: 'src/' },
    { builder: 'mkdist', ext: 'cjs', format: 'cjs', input: 'src/' },
    { builder: 'mkdist', ext: 'mjs', format: 'esm', input: 'src/' }
  ],
  hooks: {
    /**
     * Transforms path aliases found in build files.
     *
     * @param {BuildContext} ctx - Build context
     * @param {BuildOptions} ctx.options - Build options
     * @return {void} Nothing when complete
     */
    'mkdist:done'({ options }: BuildContext): void {
      const { outDir, rootDir } = options

      try {
        const { paths = {} } = loadTSConfig(`${rootDir}/tsconfig.json`).options

        /** @const {string[]} files - Build files to process */
        const files: string[] = getFilesToProcess(outDir, [
          'cjs',
          'd.cts',
          'd.mts',
          'd.ts',
          'mjs'
        ])

        /** @const {Alias[]} aliases - Path alias objects */
        const aliases: Alias[] = computeAliases(rootDir, paths)

        /**
         * Changes to apply to build files.
         *
         * @const {Change[]} changes
         */
        const changes: Change[] = generateChanges(files, aliases, {
          outPath: outDir,
          srcPath: path.resolve('src')
        }).map(({ file, text, ...rest }) => {
          /** @const {string} ext - {@link file} extension */
          const ext: string = path.extname(file)

          /**
           * Text changes applied to {@link file}.
           *
           * Each change in {@link rest.changes} will be updated to include the
           * current file extension, {@link ext}.
           *
           * @const {TextChange[]} changes
           */
          const changes: TextChange[] = (rest.changes ?? []).map(chg => ({
            ...chg,
            modified: !/node_modules/.test(path.resolve(file, chg.modified))
              ? chg.modified + ext
              : chg.modified
          }))

          // make sure file extensions are included in path transformations
          for (const { modified } of changes) {
            text = text.replace(modified.replace(ext, ''), modified)
          }

          return { changes, file, text }
        })

        return void applyChanges(changes)
      } catch (e: unknown) {
        console.error(e instanceof Error ? e.message : e)
      }
    },
    /**
     * Updates `mkdist` build options.
     *
     * @see https://github.com/unjs/mkdist#-usage
     *
     * @param {BuildContext} _ - Build context
     * @param {MkdistBuildEntry} __ - `mkdist` build entry
     * @param {MkdistOptions} options - `mkdist` build options
     * @return {void} Nothing when complete
     */
    'mkdist:entry:options'(_, __, options: MkdistOptions): void {
      options.pattern = ['**', '!**/{__mocks__,__snapshots__,__tests__}/**']
    }
  }
})

export default config
