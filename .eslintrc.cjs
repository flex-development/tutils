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
      files: ['src/interfaces/map-like.ts'],
      rules: {
        '@typescript-eslint/consistent-indexed-object-style': 0
      }
    },
    {
      files: [
        'src/types/built-in.ts',
        'src/types/fn.ts',
        'src/types/is-index-signature.ts'
      ],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    },
    {
      files: ['src/utils/noop.ts'],
      rules: {
        'unicorn/no-useless-undefined': 0
      }
    }
  ],
  root: true
}

module.exports = config
