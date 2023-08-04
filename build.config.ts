/**
 * @file Configuration - Build
 * @module config/build
 * @see https://github.com/flex-development/mkbuild
 */

import {
  defineBuildConfig,
  type Config,
  type OutputMetadata
} from '@flex-development/mkbuild'
import pathe from '@flex-development/pathe'
import type { BuildResult, OutputFile, PluginBuild } from 'esbuild'
import pkg from './package.json' assert { type: 'json' }
import tsconfig from './tsconfig.build.json' assert { type: 'json' }

/**
 * Build configuration.
 *
 * @const {Config} config
 */
const config: Config = defineBuildConfig({
  charset: 'utf8',
  entries: [
    { dts: 'only' },
    { dts: false, pattern: ['**/index.ts', 'enums/*'] },
    {
      dts: false,
      pattern: ['!utils/*.options.ts', 'index.ts', 'utils/*'],
      sourceRoot: pathe.join(pkg.homepage, 'tree', pkg.tagPrefix + pkg.version),
      sourcemap: true,
      sourcesContent: true
    }
  ],
  minifySyntax: true,
  plugins: [
    {
      /**
       * Plugin name.
       *
       * @const {string} name
       */
      name: 'fix-sourcemaps',

      /**
       * Makes sourcemap files relative to [`sourceRoot`][1].
       *
       * [1]: https://esbuild.github.io/api/#source-root
       * [2]: https://esbuild.github.io/plugins
       *
       * @see https://github.com/evanw/esbuild/issues/2218
       *
       * @param {PluginBuild} build - [esbuild plugin api][2]
       * @param {PluginBuild['onEnd']} build.onEnd - Build end callback
       * @return {void} Nothing when complete
       */
      setup({ initialOptions, onEnd }: PluginBuild): void {
        const { absWorkingDir = process.cwd() } = initialOptions

        return void onEnd((result: BuildResult): void => {
          /**
           * Output file objects.
           *
           * @const {OutputFile[]} outputFiles
           */
          const outputFiles: OutputFile[] = []

          for (const output of result.outputFiles!) {
            if (output.path.endsWith('.map')) {
              /**
               * Relative path to output file sourcemap is for.
               *
               * **Note**: Relative to {@linkcode absWorkingDir}.
               *
               * @const {string} outfile
               */
              const outfile: string = output.path
                .replace(absWorkingDir, '')
                .replace(/^\//, '')
                .replace(/\.map$/, '')

              /**
               * Output metadata for {@linkcode outfile}.
               *
               * @const {OutputMetadata} metadata
               */
              const metadata: OutputMetadata =
                result.metafile!.outputs[outfile]!

              /**
               * Parsed sourcemap object.
               *
               * @const {{ sources: string[] }}
               */
              const map: { sources: string[] } = JSON.parse(output.text)

              // reset sources to outfile entry point
              map.sources = [metadata.entryPoint!]

              // redefine outfile text
              Object.defineProperty(output, 'text', {
                get: (): string => JSON.stringify(map, null, 2)
              })
            }

            outputFiles.push(output)
          }

          return void (result.outputFiles = outputFiles)
        })
      }
    }
  ],
  target: [
    pkg.engines.node.replace(/^\D+/, 'node'),
    tsconfig.compilerOptions.target
  ],
  tsconfig: 'tsconfig.build.json'
})

export default config
