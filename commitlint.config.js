const { Rule, RuleConfigTuple } = require('@commitlint/types')
const { existsSync, lstatSync, readdirSync } = require('fs')
const { resolve } = require('path')
const { Record } = require('typescript')

/**
 * @file Commitlint Configuration
 * @see https://commitlint.js.org/#/guides-local-setup
 * @see https://www.conventionalcommits.org/en/v1.0.0/#specification
 */

module.exports = {
  /**
   * @property {boolean} defaultIgnores - If true, enable default ignore rules
   */
  defaultIgnores: true,

  /**
   * @property {Array<string>} extends - IDs of commitlint configurations
   * @see https://www.conventionalcommits.org/
   * @see https://www.npmjs.com/package/@commitlint/config-conventional
   */
  extends: ['@commitlint/config-conventional'],

  /**
   * @property {string} formatter - Name of formatter package
   */
  formatter: '@commitlint/format',

  /**
   * Functions that return true if commitlint should ignore the given message.
   *
   * @param {string} commit - The commit message
   * @return {boolean} `true` if commitlint should ignore message
   */
  ignores: [
    /**
     * Ignores commit messages that begin with "wip" as the scope or type.
     *
     * @param {string} commit - The commit message
     * @return {boolean} True if commit begins with "wip" as the scope or type
     */
    commit => [':', '('].some(char => commit.startsWith(`wip${char}`))
  ],

  /**
   * @property {Record<string, Rule>} rules - Rules to check against
   * @see https://commitlint.js.org/#/reference-rules
   */
  rules: {
    /**
     * Scope syntax.
     */
    'scope-case': [2, 'always', 'kebab-case'],

    /**
     * Returns the rules for valid commit scopes.
     *
     * @return {RuleConfigTuple} Scope rules
     */
    'scope-enum': () => {
      const SRC = resolve(__dirname, 'src')

      const directories = arr => {
        return arr.filter(d => {
          const path = resolve(SRC, d)

          return existsSync(path) && lstatSync(resolve(SRC, d)).isDirectory()
        })
      }

      return [
        2,
        'always',
        [...directories(readdirSync(SRC)), 'deps', 'release']
      ]
    },

    /**
     * Rules for valid commit types.
     */
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test'
      ]
    ]
  }
}
