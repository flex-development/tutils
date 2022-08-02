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
  ],
  settings: {
    react: {
      version: require('./package.json').devDependencies.react
    }
  }
}

module.exports = config
