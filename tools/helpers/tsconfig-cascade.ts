/**
 * @file Helpers - tsconfigCascade
 * @module tools/helpers/tsconfigCascade
 */

import type { OrUndefined } from '@flex-development/tutils'
import merge from 'lodash.mergewith'
import type { TsConfig } from 'tsc-prog'
import { loadSync as load } from 'tsconfig/dist/tsconfig'

export type Config = [string, 'json' | `${string}.json`]

/**
 * Deep merges TypeScript config files.
 *
 * @param {Config[]} [configs=[]] - Array containing suffix of each config file
 * @param {string} [baseUrl=process.env.PROJECT_CWD] - Base directory to resolve
 * non-absolute module names from.
 * @return {TsConfig} Tsconfig object
 */
const tsconfigCascade = (
  configs: Config[] = [],
  baseUrl: OrUndefined<string> = process.env.PROJECT_CWD
): TsConfig => {
  const $: Config[] = configs.map(conf => [conf[0], `tsconfig.${conf[1]}`])

  const tsconfigs: TsConfig[] = $.map(arg => load(...arg).config as TsConfig)
  const tsconfig: TsConfig = merge({}, ...(tsconfigs as [TsConfig]))

  if (baseUrl && tsconfig.compilerOptions?.paths) {
    for (const alias of Object.keys(tsconfig.compilerOptions.paths)) {
      const paths = tsconfig.compilerOptions.paths[alias]!

      tsconfig.compilerOptions.paths[alias] = paths.map(p => `${baseUrl}/${p}`)
    }
  }

  return tsconfig
}

export default tsconfigCascade
