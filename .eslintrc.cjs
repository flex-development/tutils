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
        'src/types/DeepOmit.ts',
        'src/types/DeepPartialByHelper.ts',
        'src/types/DeepPartialByRequiredHelper.ts',
        'src/types/Overwrite.ts'
      ],
      rules: {
        '@typescript-eslint/ban-types': 0
      }
    }
  ]
}
