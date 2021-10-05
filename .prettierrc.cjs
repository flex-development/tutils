/**
 * @file Prettier Configuration
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @see https://github.com/rx-ts/prettier/tree/master/packages/sh
 */

module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: ['*.sh', '.husky/commit-msg', '.husky/pre-commit'],
      options: {
        functionNextLine: true,
        indent: 2,
        keepComments: true,
        keepPadding: false,
        parser: 'sh',
        spaceRedirects: true,
        switchCaseIndent: true,
        variant: 0
      }
    }
  ]
}
