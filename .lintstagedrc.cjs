/**
 * @file Lint Staged Configuration
 * @see https://github.com/okonet/lint-staged
 */

const { extensions } = require('./.vscode/settings.json')['eslint.options']

module.exports = {
  /**
   * Attempt to fix code style.
   */
  [`*.{${extensions.join(',')}}`]: ['yarn fix:style', 'git add -A'],

  /**
   * Attempt to fix formatting.
   */
  '*': ['yarn fix:format', 'git add -A'],

  /**
   * Run type check.
   *
   * @return {string} Type check command
   */
  '{**/*.ts,**/tsconfig.*}': [() => 'yarn check:types'],

  /**
   * Run local integrity check.
   */
  'yarn.lock': ['yarn check:dedupe']
}
