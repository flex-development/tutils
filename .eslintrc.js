/**
 * @file ESLint Configuration
 * @see https://eslint.org/docs/user-guide/configuring
 * @see https://github.com/prettier/eslint-config-prettier
 */

const EXTENDS_CONFIG = [
  'eslint:recommended',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended',
  'plugin:jsdoc/recommended'
]

const PARSER_OPTIONS = {
  babelOptions: {},
  ecmaFeatures: {
    impliedStrict: true,
    jsx: true
  },
  ecmaVersion: 2020,
  sourceType: 'module'
}

module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: EXTENDS_CONFIG,
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...PARSER_OPTIONS,
    project: ['./tsconfig.json']
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'jsdoc',
    'spellcheck',
    'tree-shaking'
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-useless-constructor': 1,
    eqeqeq: 1,
    'jsdoc/check-indentation': 1,
    'jsdoc/check-line-alignment': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/no-undefined-types': [
      1,
      {
        definedTypes: ['Exception']
      }
    ],
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-throws': 1,
    'no-ex-assign': 0,
    'prefer-arrow-callback': 2,
    'prettier/prettier': [
      2,
      {
        usePrettierrc: true
      }
    ],
    'sort-keys': [
      1,
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: true
      }
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        identifiers: false,
        lang: 'en_US',
        minLength: 3,
        skipIfMatch: [],
        skipWordIfMatch: [],
        skipWords: [
          'commitlint',
          'enums',
          'enum',
          'execa',
          'formatter',
          'nullable',
          'perf',
          'postpublish',
          'readonly',
          'tgz',
          'typeof',
          'utf8',
          'wip',
          'zsh'
        ],
        strings: true
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        ...PARSER_OPTIONS,
        requireConfigFile: false
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-var-requires': 0
      }
    },
    {
      files: ['**/__tests__/**', '*.spec.ts'],
      env: {
        es6: true,
        'jest/globals': true,
        node: true
      },
      extends: EXTENDS_CONFIG.splice(1, 0, 'plugin:jest/recommended'),
      rules: {
        'jest/no-disabled-tests': 0
      }
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 0,
        'prettier/prettier': 0
      }
    },
    {
      files: ['.eslintrc.*', 'scripts/js/create-dist-package-json.js'],
      rules: {
        'sort-keys': 0
      }
    },
    {
      files: ['.eslintrc.*'],
      rules: {
        'spellcheck/spell-checker': 0
      }
    }
  ],
  root: true,
  settings: {
    jsdoc: {
      augmentsExtendsReplacesDocs: true,
      implementsReplacesDocs: true,
      mode: 'typescript',
      overrideReplacesDocs: true,
      structuredTags: {
        param: {
          required: ['name', 'type']
        },
        throws: {
          name: 'namepath-defining',
          required: ['type']
        }
      },
      tagNamePreference: {
        augments: 'extends',
        constant: 'const',
        returns: 'return'
      }
    }
  }
}
