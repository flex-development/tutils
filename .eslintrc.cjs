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
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: [
        'src/types/built-in.ts',
        'src/types/exact-optional-property-types.ts',
        'src/types/fn.ts',
        'src/types/simplify.ts'
      ],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    },
    {
      files: ['src/types/built-in.ts'],
      rules: {
        '@typescript-eslint/array-type': 0
      }
    },
    {
      files: [
        'src/types/head.ts',
        'src/types/is-tuple.ts',
        'src/types/tail.ts'
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': 0
      }
    },
    {
      files: ['src/interfaces/map-like.ts'],
      rules: {
        '@typescript-eslint/consistent-indexed-object-style': 0
      }
    }
  ],
  root: true
}

module.exports = config
