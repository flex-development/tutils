/**
 * @file Mocha Configuration - Base
 * @see https://mochajs.org/#command-line-usage
 * @see https://mochajs.org/#configuration-format
 * @see https://typestrong.org/ts-node/docs/recipes/mocha
 */

/**
 * @type {string}
 * @const {string} PWD - Root project directory
 */
const PWD = process.env.PROJECT_CWD

/**
 * @type {string[]}
 * @const {string[]} TYPES - Test file prefixes (e.g: `*spec.ts`)
 */
const TYPES = ['', 'e2e', 'functional', 'integration']

/**
 * @type {Mocha.MochaInstanceOptions}
 * @const config - Configuration object
 */
const config = {
  allowUncaught: false,
  asyncOnly: false,
  bail: false,
  checkLeaks: true,
  color: true,
  diff: true,
  exit: true,
  extension: TYPES.map(type => `${type ? '.' : ''}${type}.spec.ts`),
  failZero: false,
  files: [],
  forbidOnly: true,
  forbidPending: false,
  fullTrace: true,
  globals: ['assert', 'chai', 'expect', 'faker', 'pf', 'sandbox'],
  ignore: ['coverage', 'node_modules'],
  inlineDiffs: true,
  isWorker: false,
  noHighlighting: false,
  'node-option': [],
  parallel: false,
  recursive: true,
  reporter: `${PWD}/__tests__/reporter/index.ts`,
  require: [
    'ts-node/register',
    `${PWD}/tools/helpers/tsconfig-paths.cjs`,
    `${PWD}/__tests__/globals/index.ts`,
    `${PWD}/__tests__/config/global-fixtures.ts`,
    `${PWD}/__tests__/config/root-hooks.ts`
  ],
  retries: 0,
  sort: true,
  spec: 'src/**/__tests__/*.spec.ts',
  timeout: 10 * 1000,
  ui: 'bdd',
  watch: false
}

module.exports = config
