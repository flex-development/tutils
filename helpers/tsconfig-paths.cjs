/**
 * @file Helpers - tsconfig-paths
 * @module helpers/tsconfig-paths
 */

const path = require('path')
const loadSync = require('tsconfig/dist/tsconfig').loadSync
const register = require('tsconfig-paths/lib/register').register

/**
 * @type {string}
 * @const BASE_URL - Path to directory to begin resolving files from
 */
const BASE_URL = path.resolve(__dirname, '..')

/**
 * @type {string}
 * @const TSCONFIG - Name of tsconfig file
 */
const TSCONFIG = process.env.TS_NODE_PROJECT ?? 'tsconfig.json'

/**
 * Resolve **all** `.cjs` files (includes barrel files).
 *
 * @see https://adrianfaciu.dev/posts/barrel-files
 */
require.extensions['.cjs'] = require.extensions['.js']

/**
 * Install custom module loading function that respects paths in tsconfig(s).
 *
 * @see https://github.com/dividab/tsconfig-paths
 */
register({
  addMatchAll: true,
  baseUrl: BASE_URL,
  mainFields: ['main'],
  paths: {
    // Always use paths from root tsconfig.json, but allow overrides
    ...loadSync(BASE_URL, 'tsconfig.json').config.compilerOptions.paths,
    ...loadSync(BASE_URL, TSCONFIG).config.compilerOptions.paths
  }
})
