const baseConfig = require('./.eslintrc.base.cjs')

/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...baseConfig.overrides,
    {
      files: [
        'src/types/deep-omit.type.ts',
        'src/types/deep-partial-by-helper.type.ts',
        'src/types/deep-partial-by-required-helper.type.ts',
        'src/types/overwrite.type.ts'
      ],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    }
  ]
}
