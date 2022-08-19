/**
 * @file Lint Staged Configuration
 * @module config/lint-staged
 * @see https://github.com/okonet/lint-staged
 */

/**
 * @type {string[]}
 * @const exts - ESLint extensions
 */
const exts = require('./.vscode/settings.json')['eslint.options'].extensions

module.exports = {
  /**
   * Check code style.
   */
  [`**/*.{${exts.join(',')}}`]: ['yarn fix:lint'],

  /**
   * Check code formatting and spelling.
   */
  '*': ['yarn fix:format', 'yarn check:spelling'],

  /**
   * Check types.
   */
  '{**/*.ts,**/tsconfig.*}': [
    /**
     * Returns the project's type checking command.
     *
     * @return {string} Type check command
     */
    () => 'yarn check:types'
  ],

  /**
   * Check for duplicate dependencies in lockfile.
   */
  '**/yarn.lock': ['yarn dedupe --check']
}
