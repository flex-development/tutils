const { overrides, rules } = require('./.eslintrc.base.cjs')

/**
 * @file ESLint Configuration - Root
 * @see https://eslint.org/docs/user-guide/configuring
 */

const RULES_SPELLCHECKER = rules['spellcheck/spell-checker']

module.exports = {
  root: true,
  extends: ['./.eslintrc.base.cjs'],
  rules: {
    'spellcheck/spell-checker': [
      RULES_SPELLCHECKER[0],
      {
        ...RULES_SPELLCHECKER[1],
        skipWords: [
          ...RULES_SPELLCHECKER[1].skipWords,
          'duid',
          'enum',
          'enums',
          'uid',
          'unix'
        ]
      }
    ]
  },
  overrides: [
    ...overrides,
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
