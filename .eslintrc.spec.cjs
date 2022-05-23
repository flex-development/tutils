/**
 * @file ESLint Configuration - Testing
 * @see https://eslint.org/docs/user-guide/configuring
 * @see https://github.com/turbo87/eslint-plugin-chai-expect
 * @see https://github.com/istanbuljs/eslint-plugin-istanbul
 * @see https://github.com/dangreenisrael/eslint-plugin-jest-formatting
 * @see https://github.com/lo1tuma/eslint-plugin-mocha
 */

const { Linter } = require('eslint')

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  overrides: [
    {
      files: ['**/__tests__/*.spec.*'],
      env: {
        mocha: true
      },
      globals: {
        after: true,
        afterEach: true,
        assert: true,
        before: true,
        beforeEach: true,
        describe: true,
        expect: true,
        faker: true,
        inspect: true,
        it: true,
        pf: true,
        sandbox: true
      },
      plugins: [
        '@typescript-eslint',
        'chai-expect',
        'istanbul',
        'jest-formatting',
        'mocha',
        'spellcheck',
        'unicorn'
      ],
      rules: {
        '@typescript-eslint/no-base-to-string': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        'chai-expect/missing-assertion': 2,
        'chai-expect/no-inner-compare': 2,
        'chai-expect/no-inner-literal': 2,
        'chai-expect/terminating-properties': [2, { properties: [] }],
        'istanbul/no-ignore-file': 0,
        'istanbul/prefer-ignore-reason': 1,
        'jest-formatting/padding-around-after-all-blocks': 1,
        'jest-formatting/padding-around-after-each-blocks': 1,
        'jest-formatting/padding-around-before-all-blocks': 1,
        'jest-formatting/padding-around-before-each-blocks': 1,
        'jest-formatting/padding-around-describe-blocks': 1,
        'jest-formatting/padding-around-expect-groups': 1,
        'jest-formatting/padding-around-test-blocks': 1,
        'mocha/handle-done-callback': [0, { ignoreSkipped: false }],
        'mocha/max-top-level-suites': [2, { limit: 1 }],
        'mocha/no-async-describe': 2,
        'mocha/no-exclusive-tests': 2,
        'mocha/no-exports': 2,
        'mocha/no-global-tests': 2,
        'mocha/no-hooks': 0,
        'mocha/no-hooks-for-single-case': 0,
        'mocha/no-identical-title': 2,
        'mocha/no-mocha-arrows': 0,
        'mocha/no-nested-tests': 2,
        'mocha/no-pending-tests': 2,
        'mocha/no-return-and-callback': 2,
        'mocha/no-return-from-async': 2,
        'mocha/no-setup-in-describe': 0,
        'mocha/no-sibling-hooks': 2,
        'mocha/no-skipped-tests': 0,
        'mocha/no-synchronous-tests': [0, { allowed: ['async'] }],
        'mocha/no-top-level-hooks': 2,
        'mocha/prefer-arrow-callback': 2,
        'mocha/valid-suite-description': [
          2,
          {
            pattern: '^[.$#@a-z0-9(DELETE|GET|PATCH|POST|PUT)]*.+'
          }
        ],
        'mocha/valid-test-description': [2, { pattern: '^should.[a-z0-9]+.*' }],
        'promise/valid-params': 0,
        'unicorn/consistent-destructuring': 0,
        'unicorn/consistent-function-scoping': 0,
        'unicorn/explicit-length-check': 0,
        'unicorn/no-array-for-each': 0,
        'unicorn/prefer-at': 0,
        'unicorn/no-useless-undefined': 0
      },
      settings: {
        'mocha/additionalCustomNames': []
      }
    },
    {
      files: ['**/.mocharc.*', '__tests__/reporter/index.ts'],
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 0
      }
    },
    {
      files: ['**/.mocharc.*'],
      rules: {
        'spellcheck/spell-checker': 0
      }
    },
    {
      files: [
        '__tests__/config/global-fixtures.ts',
        '__tests__/reporter/index.ts'
      ],
      rules: {
        '@typescript-eslint/dot-notation': 0
      }
    },
    {
      files: ['__tests__/reporter/index.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        'sort-keys': 0
      }
    }
  ]
}

module.exports = config
