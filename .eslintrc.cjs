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
      files: ['src/types/decorator-class.ts', 'src/types/decorator-method.ts'],
      rules: {
        '@typescript-eslint/no-invalid-void-type': 0
      }
    },
    {
      files: ['src/utils/__tests__/ksort.spec.ts'],
      rules: {
        'sort-keys': 0
      }
    },
    {
      files: ['src/utils/ksort.ts'],
      rules: {
        '@typescript-eslint/no-use-before-define': 0
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
