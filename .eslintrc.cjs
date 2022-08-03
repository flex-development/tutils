/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * @type {import('eslint').Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: ['build.config.ts'],
      rules: {
        'unicorn/prefer-module': 0
      }
    },
    {
      files: [
        'src/types/built-in.ts',
        'src/types/deep-partial-by-helper.ts',
        'src/types/deep-partial-by-required-helper.ts',
        'src/types/overwrite.ts'
      ],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    },
    {
      files: ['src/types/deep-omit.ts'],
      rules: {
        '@typescript-eslint/sort-type-union-intersection-members': 0
      }
    },
    {
      files: ['src/types/or-never.ts'],
      rules: {
        '@typescript-eslint/no-redundant-type-constituents': 0
      }
    }
  ]
}

module.exports = config
