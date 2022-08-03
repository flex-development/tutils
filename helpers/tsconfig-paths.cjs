/**
 * @file Helpers - tsconfig-paths
 * @module helpers/tsconfig-paths
 * @see https://github.com/dividab/tsconfig-paths
 */

const path = require('node:path')
const loadSync = require('tsconfig').loadSync
const register = require('tsconfig-paths/lib/register').register

/**
 * @type {string}
 * @const PWD - Path to root project directory
 */
const PWD = path.resolve('.')

/**
 * @type {string}
 * @const TS_NODE_PROJECT - Name of tsconfig file
 */
const TS_NODE_PROJECT = process.env.TS_NODE_PROJECT ?? 'tsconfig.json'

/**
 * @type {import('tsconfig.json')}
 * @const tsconfig - Base tsconfig
 */
const tsconfig = loadSync(PWD, 'tsconfig.json').config

/**
 * @type {import('tsconfig.json')}
 * @const tsconfig2 - Secondary tsconfig
 */
const tsconfig2 = loadSync(PWD, TS_NODE_PROJECT).config

/** resolve **all** `.cjs` files (includes barrel files) */
require.extensions['.cjs'] = require.extensions['.js']

/** install custom module loading function that respects paths in tsconfig(s) */
register({
  addMatchAll: true,
  baseUrl: PWD,
  cwd: PWD,
  mainFields: ['module', 'main'],
  paths: {
    ...tsconfig.compilerOptions.paths,
    ...tsconfig2.compilerOptions.paths
  }
})
