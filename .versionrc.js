/**
 * @file Conventional Changelog Configuration
 * @see https://github.com/conventional-changelog
 */

const sections = {
  build: ':hammer: Build',
  chore: ':pencil2: Housekeeping',
  docs: ':book: Documentation',
  feat: ':sparkles: Features',
  fix: ':bug: Fixes',
  perf: ':zap: Performance Updates',
  refactor: ':recycle: Code Improvements',
  revert: ':rewind: Revert',
  style: ':nail_care: Formatting & Structure',
  test: ':robot: Testing',
  wip: ':construction: Work in Progress'
}

module.exports = {
  types: [
    { type: 'feat', section: sections.feat },
    { type: 'fix', section: sections.fix },
    { type: 'revert', section: sections.revert },
    { type: 'test', section: sections.test },
    { type: 'docs', section: sections.docs },
    { type: 'build', section: sections.build },
    { type: 'refactor', section: sections.refactor },
    { type: 'perf', section: sections.perf },
    { type: 'style', section: sections.style },
    { type: 'chore', section: sections.chore },
    { type: 'wip', section: sections.wip },
    { type: 'ci', hidden: true }
  ],
  releaseCommitMessageFormat: 'chore(release): publish v{{currentTag}}'
}
