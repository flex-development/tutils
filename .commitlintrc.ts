/**
 * @file Commitlint Configuration
 * @see https://commitlint.js.org/#/guides-local-setup
 * @see https://commitlint.js.org/#/reference-configuration
 */

import type { UserConfig } from '@commitlint/types'

/** @const {UserConfig} config - commitlint configuration */
const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  ignores: [],
  rules: {
    'scope-case': [2, 'always', 'kebab-case'],
    'scope-enum': [
      2,
      'always',
      [
        'cjs',
        'deploy',
        'deps',
        'deps-dev',
        'deps-opt',
        'deps-peer',
        'enums',
        'esm',
        'exports',
        'github',
        'guards',
        'husky',
        'hybrid',
        'interfaces',
        'pkg',
        'release',
        'scripts',
        'tools',
        'types',
        'typescript',
        'vscode',
        'workflows',
        'yarn'
      ]
    ],
    'subject-case': [1, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'wip'
      ]
    ]
  }
}

export default config
