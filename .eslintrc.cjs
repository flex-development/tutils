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
      files: ['src/types/built-in.ts', 'src/types/overwrite.ts'],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    },
    {
      files: ['src/types/is-tuple.ts'],
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
  ]
}

module.exports = config
