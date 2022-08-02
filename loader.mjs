/**
 * @file Custom Loader
 * @module loader
 * @see https://github.com/TypeStrong/ts-node/issues/1007
 * @see https://nodejs.org/docs/latest-v16.x/api/all.html#all_esm_loaders
 */

import path from 'node:path'
import { createEsmHooks, register } from 'ts-node'
import { configLoader } from 'tsconfig-paths/lib/config-loader'
import { createMatchPath } from 'tsconfig-paths/lib/match-path-sync'
import { load as loadtsconfig } from 'tsconfig/dist/tsconfig'

/**
 * @type {import('ts-node').NodeLoaderHooksAPI2}
 * @const hooks - `ts-node` loader hooks
 */
const hooks = createEsmHooks(register())

/**
 * Determines how `url` should be interpreted, retrieved, and parsed.
 *
 * @see https://nodejs.org/docs/latest-v16.x/api/all.html#all_esm_loadurl-context-defaultload
 *
 * @async
 *
 * @param {string} url - `file:` url of module
 * @param {LoadHookContext} context - Hook context
 * @param {?LoaderHookFormat} [context.format] - Module format
 * @param {ImportAssertions} context.importAssertions - Import assertions map
 * @param {LoadHook} defaultLoad - Default Node.js `load` function
 * @return {Promise<LoadHookResult>} Hook result
 */
export const load = async (url, context, defaultLoad) => {
  // support for extensionless files in "bin" scripts
  // https://github.com/nodejs/modules/issues/488#issuecomment-804895142
  if (/^file:\/{3}.*\/bin\//.test(url) && !path.extname(url)) {
    context.format = 'commonjs'
  }

  return hooks.load(url, context, defaultLoad)
}

/**
 * Returns the resolved file URL for `specifier` and `context.parentURL` and,
 * optionally, its format as a hint to {@link load}.
 *
 * **Note**: Path aliases found in tsconfig(s) are respected during resolution.
 *
 * @see https://nodejs.org/docs/latest-v16.x/api/all.html#all_esm_resolvespecifier-context-defaultresolve
 *
 * @async
 *
 * @param {string} specifier - Module specifier
 * @param {ResolveHookContext} context - Hook context
 * @param {string[]} context.conditions - Import conditions
 * @param {ImportAssertions} context.importAssertions - Import assertions map
 * @param {string} [context.parentURL] - `file:` url of importer
 * @param {ResolveHook} defaultResolve - Node.js default resolver
 * @return {Promise<ResolveHookResult>} Hook result
 * @throws {Error}
 */
export const resolve = async (specifier, context, defaultResolve) => {
  /**
   * @type {string}
   * @const PWD - Path to root project directory
   */
  const PWD = path.resolve('.')

  /**
   * @type {string}
   * @const TS_NODE_PROJECT - Tsconfig file name or path
   */
  const TS_NODE_PROJECT = process.env.TS_NODE_PROJECT ?? 'tsconfig.json'

  /**
   * @type {import('tsconfig.json')}
   * @const tsconfig - Base tsconfig
   */
  const tsconfig = (await loadtsconfig(PWD, 'tsconfig.json')).config

  /**
   * @type {import('tsconfig.json')}
   * @const tsconfig2 - Secondary tsconfig
   */
  const tsconfig2 = (await loadtsconfig(PWD, TS_NODE_PROJECT)).config

  /**
   * @type {import('tsconfig-paths').ConfigLoaderResult}
   * @const result - `tsconfig-paths` config loader result
   */
  const result = configLoader({
    cwd: PWD,
    explicitParams: {
      addMatchAll: true,
      baseUrl: PWD,
      mainFields: ['module', 'main'],
      paths: {
        ...tsconfig.compilerOptions.paths,
        ...tsconfig2.compilerOptions.paths
      }
    }
  })

  if (result.resultType === 'failed') throw new Error(result.message)

  specifier =
    createMatchPath(
      result.absoluteBaseUrl,
      result.paths,
      result.mainFields,
      result.addMatchAll
    )(specifier) ?? specifier

  return hooks.resolve(specifier, context, defaultResolve)
}
