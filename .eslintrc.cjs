/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

const { Linter } = require('eslint')
const { overrides } = require('./.eslintrc.base.cjs')

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...overrides,
    {
      files: [
        'src/types/built-in.type.ts',
        'src/types/deep-partial-by-helper.type.ts',
        'src/types/deep-partial-by-required-helper.type.ts',
        'src/types/overwrite.type.ts'
      ],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    },
    {
      files: ['src/types/deep-omit.type.ts'],
      rules: {
        '@typescript-eslint/sort-type-union-intersection-members': 0
      }
    },
    {
      files: ['src/types/or-never.type.ts'],
      rules: {
        '@typescript-eslint/no-redundant-type-constituents': 0
      }
    }
  ]
}

module.exports = config
