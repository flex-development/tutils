/**
 * @file Lint Staged Configuration
 * @module config/lint-staged
 * @see https://github.com/okonet/lint-staged
 */

/**
 * @type {Record<string, string[]>}
 * @const extensions - ESLint extensions
 */
const eslint = require('./.vscode/settings.json')['eslint.options']

module.exports = {
  /**
   * Fix code style.
   */
  [`**/*.{${eslint.extensions.join(',')}}`]: ['yarn fix:lint', 'git add -A'],

  /**
   * Fix formatting and check spelling.
   */
  '*': ['yarn fix:format', 'yarn check:spelling', 'git add -A'],

  /**
   * Run type check.
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
   * Deduplicate dependencies.
   */
  'yarn.lock': ['yarn dedupe --check']
}
