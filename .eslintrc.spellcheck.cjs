/**
 * @file ESLint Configuration - Spellcheck
 * @see https://eslint.org/docs/user-guide/configuring
 * @see https://github.com/aotaduy/eslint-plugin-spellcheck
 */

const { Linter } = require('eslint')
const DEFAULTS = require('eslint-plugin-spellcheck/rules/defaultSettings')

/**
 * @type {Linter.Severity}
 * @const SEVERITY - `spellcheck/spell-checker` rule severity
 */
const SEVERITY = 2

/**
 * @type {object}
 * @const OPTIONS - `spellcheck/spell-checker` options
 */
const OPTIONS = {
  comments: true,
  identifiers: false,
  ignoreRequire: true,
  lang: 'en_US',
  minLength: 1,
  skipIfMatch: [
    ...DEFAULTS.skipIfMatch,
    '[`].[`]\\w+',
    '([A-Za-z]+)?([\\d])([A-Za-z]+)?'
  ],
  skipWordIfMatch: [],
  skipWords: [
    ...DEFAULTS.skipWords,
    'abc',
    'algs',
    'alice',
    'ann',
    'anna',
    'argv',
    'atoi',
    'bool',
    'booleanish',
    'br',
    'bson',
    'builtins',
    'chai',
    'ci',
    'cjs',
    'codewars',
    'commitlint',
    'curr',
    'daniel',
    'dedupe',
    'deoxyribonucleic',
    'dgram',
    'dna',
    'dns',
    'dotenv',
    'dto',
    'dtos',
    'enum',
    'enums',
    'esm',
    'explicitly',
    'fibonacci',
    'figcaption',
    'filenames',
    'fixme',
    'formatter',
    'fs',
    'globals',
    'greg',
    'handoff',
    'harris',
    'haversine',
    'ig',
    'impl',
    'indivisibilities',
    'instanceof',
    'ish',
    'isogram',
    'jaden',
    'jane',
    'javascript',
    'jim',
    'john',
    'jsdoc',
    'jsonspec',
    'kata',
    'katas',
    'keyof',
    'lamda',
    'latin',
    'matcher',
    'matchers',
    'meerkat',
    'meerkats',
    'mjs',
    'msg',
    'multiline',
    'namespace',
    'ncc',
    'nullable',
    'nullish',
    'num',
    'nums',
    'os',
    'perf',
    'pls',
    'pluto',
    'pnv',
    'postinstall',
    'prepack',
    'prog',
    'punycode',
    'querystring',
    'racecar',
    'radians',
    'readline',
    'readonly',
    'reformats',
    'ryan',
    'simon',
    'sinon',
    'stderr',
    'stdout',
    'str',
    'stringified',
    'strs',
    'testcase',
    'tgz',
    'tls',
    'tsc',
    'tsconfig',
    'tsconfigs',
    'tty',
    'txt',
    'typeof',
    'uid',
    'unix',
    'usr',
    'utf',
    'utf8',
    'vercel',
    'vm',
    'vscode',
    'walter',
    'webpack',
    'whitespace',
    'wip',
    'workspace',
    'workspaces',
    'wx',
    'yargs',
    'zlib'
  ],
  strings: true,
  templates: false
}

/**
 * @type {Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  plugins: ['spellcheck'],
  rules: {
    'spellcheck/spell-checker': [SEVERITY, OPTIONS]
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        'spellcheck/spell-checker': [
          SEVERITY,
          Object.assign({}, OPTIONS, {
            skipWords: [...OPTIONS.skipWords, 'duid', 'nt', 'tutils']
          })
        ]
      }
    }
  ]
}

module.exports = config
