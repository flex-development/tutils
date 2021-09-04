const prettierConfig = require('./.prettierrc')

/**
 * @file ESLint Configuration - Base
 * @see https://eslint.org/docs/user-guide/configuring
 * @see https://github.com/prettier/eslint-config-prettier
 */

module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended'
  ],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {},
    ecmaFeatures: {
      impliedStrict: true,
      jsx: false
    },
    ecmaVersion: 2021,
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'jsdoc',
    'markdown',
    'spellcheck'
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
    '@typescript-eslint/no-var-requires': 1,
    eqeqeq: 1,
    'import/no-anonymous-default-export': 0,
    'jsdoc/check-indentation': 1,
    'jsdoc/check-line-alignment': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/check-tag-names': [1, { definedTags: ['link'] }],
    'jsdoc/no-multi-asterisks': 0,
    'jsdoc/no-undefined-types': [
      1,
      {
        definedTypes: []
      }
    ],
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-throws': 1,
    'jsdoc/tag-lines': [
      1,
      'any',
      {
        count: 1,
        noEndLines: false,
        tags: {}
      }
    ],
    'no-ex-assign': 0,
    'prefer-arrow-callback': 2,
    'prettier/prettier': [2, prettierConfig],
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
      2,
      {
        comments: true,
        identifiers: false,
        lang: 'en_US',
        minLength: 3,
        skipIfMatch: [],
        skipWordIfMatch: [],
        skipWords: [
          'argv',
          'booleanish',
          'cjs',
          'commitlint',
          'copyfiles',
          'enum',
          'enums',
          'esm',
          'formatter',
          'keyof',
          'nullable',
          'nullish',
          'perf',
          'pnv',
          'readonly',
          'rebase',
          'rimraf',
          'tgz',
          'tsconfig',
          'ttsc',
          'typeof',
          'usr',
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
      files: ['**/.eslintrc.*'],
      rules: {
        'sort-keys': 0,
        'spellcheck/spell-checker': 0
      }
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown'
    },
    {
      files: ['**/*.md/*.ts'],
      parser: '@typescript-eslint/parser'
    },
    {
      files: ['**/*.js', '**/*.md/*.js'],
      parser: `${__dirname}/node_modules/@babel/eslint-parser/lib/index.cjs`,
      parserOptions: {
        requireConfigFile: false
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-var-requires': 0
      }
    }
  ],
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
