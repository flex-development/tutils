# Contributing Guide

This document aims to describe the workflows and rules used for developing this
project. This includes, but is not limited to:

- how to contribute code (coding standards, testing, documenting source code)
- how pull requests are handled
- how to file bug reports

## Overview

[Getting Started](#getting-started)\
[Contributing Code](#contributing-code)\
[Labels](#labels)\
[Opening Issues](#opening-issues)\
[Pull Requests & Code Reviews](#pull-requests-&-code-reviews)\
[Merge Strategies](#merge-strategies)\
[Releasing](#releasing)

## Getting Started

### Yarn

This project uses Yarn 2. The Yarn configuration for this project can be found
in [`.yarnrc.yml`](.yarnrc.yml). Consult the config file for a list of package
scopes, registry servers, and required environment variables.

If you're already using Yarn globally, see the [Yarn 2 Migration docs][1].

### Git Clone

```zsh
git clone https://github.com/flex-development/tutils
cd tutils
yarn
```

Note that if you have a global Yarn configuration (or any `YARN_*` environment
variables set), an error will be displayed in the terminal if any settings
conflict with the project's Yarn configuration, or the Yarn 2 API. An error will
also be displayed if you're missing any environment variables.

### Git Config

The examples in this guide contain references to custom Git aliases.

See [`.gitconfig`](.github/.gitconfig) for an exhausive list of aliases.

### Environment

#### GitHub Actions

Variables are prefixed by `secrets.` in [workflow](.github/workflows/) files.

#### Yarn 2

| name                      |
| ------------------------- |
| `GH_PAT`                  |
| `INIT_CWD` **\***         |
| `NPM_TOKEN`               |
| `PROJECT_CWD` **\***      |
| `npm_package_name` **\*** |

**\*** Environment variable provided by [Yarn 2 scripts and binaries][2]

## Contributing Code

[Husky][3] is used to locally enforce coding and commit message standards, as
well as run test suites pre-push.

Any code merged into the [development and production branches](#branching-model)
must confront the following criteria:

- changes should be discussed prior to implementation
- changes have been tested properly
- changes should include documentation updates if applicable
- changes have an associated ticket and pull request

### Branching Model

- Development: `next`
- Production: `main`

### Branch Prefixes

When creating a new branch, the name should match the following format:

```zsh
[prefix]/<TICKET-ID>-<branch_name>
 │           │      │
 │           │      └─⫸ a short, memorable name (possibly the future PR title)
 │           │
 │           └─⫸ check jira issue
 │
 └─⫸ bugfix|feat|hotfix|release
```

For example:

```zsh
git chbf PROJ-4-authentication
```

will create a new branch titled `feat/PROJ-4-authentication`.

### Commit Messages

This project follows [Conventional Commit][4] standards and uses [commitlint][5]
to enforce those standards.

This means every commit must conform to the following format:

```zsh
<type>[optional scope]: <description>
 │     │                │
 │     │                └─⫸ summary in present tense; lowercase without period at the end
 │     │
 │     └─⫸ see commitlint.config.js
 │
 └─⫸ build|ci|chore|docs|feat|fix|perf|refactor|revert|style|test|wip

[optional body]

[optional footer(s)]
```

`<type>` must be one of the following values:

- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Changes that don't impact external users
- `docs`: Documentation only changes
- `feat`: New features
- `fix`: Bug fixes
- `perf`: Performance improvements
- `refactor`: Code improvements
- `revert`: Revert past changes
- `style`: Changes that do not affect the meaning of the code
- `test`: Adding missing tests or correcting existing tests
- `wip`: Working on changes, but you need to go to bed :wink:

e.g:

- `git docs 'update contributing guide'` -> `docs: update contributing guide`
- `git ac 'refactor(api)!: user queries'` -> `refactor(api)!: user queries`

See [`.commitlintrc.ts`](.commitlintrc.ts) for an exhasutive list of valid
commit scopes and types.

### Code Style

[dprint][6] is used to format code, and [ESLint][7] to lint files.

#### dprint Configurations

- [`.dprint.json`](.dprint.json)

#### ESLint Configurations

- [`.eslintrc.base.cjs`](.eslintrc.base.cjs)
- [`.eslintrc.cjs`](.eslintrc.cjs)
- [`.eslintrc.spec.cjs`](.eslintrc.spec.cjs)
- [`.eslintrc.spellcheck.cjs`](.eslintrc.spellcheck.cjs)
- [`.eslintignore`](.eslintignore)

### Making Changes

Source code is located in [`src`](src) directory.

### Documentation

- JavaScript & TypeScript: [JSDoc][8], linted with [`eslint-plugin-jsdoc`][9]

Before making a pull request, be sure your code is well documented, as it will
be part of your code review.

### Testing

This project uses a [Mocha][10] x [Chai][11] workflow.

[Husky](#contributing-code) is configured to run tests before every push. If you
need to create a new issue regarding a test, or need to make a `wip` commit, use
`it.skip` to mark your tests as [pending][12].

#### Running Tests

- run test suites: `yarn test`
- run test suites (with live coverage view): `yarn test:coverage`

### Getting Help

If you need help, make note of any issues in their respective files. Whenever
possible, create a test to reproduce the error. Make sure to label your issue as
`type:question` and `status:help-wanted`.

## Labels

This project uses a well-defined list of labels to organize tickets and pull
requests. Most labels are grouped into different categories (identified by the
prefix, eg: `status:`).

A list of labels can be found in [`.github/labels.yml`](.github/labels.yml).

## Opening Issues

Before opening an issue please make sure, you have:

- read the documentation
- searched open issues for an existing issue with the same topic
- search closed issues for a solution or feedback

If you haven't found a related open issue, or feel that a closed issue should be
re-visited, please open a new issue. A well-written issue has the following
traits:

- follows an [issue template](.github/ISSUE_TEMPLATE)
- is [labeled](#labels) appropriately
- contains a well-written summary of the feature, bug, or problem statement
- contains a minimal, inlined code example (if applicable)
- includes links to prior discussion if you've found any

## Pull Requests & Code Reviews

When you're ready to have your changes reviewed, open a pull request against the
`next` branch.

Every opened PR should:

- use [**this template**](.github/PULL_REQUEST_TEMPLATE.md)
- reference it's ticket id
- be [labeled](#labels) appropriately
- be assigned to yourself
- give maintainers push access so quick fixes can be pushed to your branch

### Pull Request URL Format

```zsh
https://github.com/flex-development/tutils/compare/next...<branch>
```

where `<branch>` is the name of the branch you'd like to merge into `next`.

### Code Reviews

All pull requests are subject to code reviews before being merged into `next`
and `main`. During code reviews, code-style and documentation will be reviewed.

If any changes are requested, those changes will need to be implemented and
approved before the pull request is merged.

## Merge Strategies

In every repository, the `create a merge commit` and `squash and merge` options
are enabled.

- if a PR has a single commit, or the changes across commits are logically
  grouped, use `squash and merge`
- if a PR has multiple commits, not logically grouped, `create a merge commit`

When merging, please make sure to use the following commit message format:

```txt
<type>[optional scope]: <pull-request-title> (#pull-request-n)
 │     │                │
 │     │                └─⫸ check your pull request
 │     │
 │     └─⫸ see commitlint.config.js
 │
 └─⫸ build|ci|chore|docs|feat|fix|merge|perf|refactor|release|revert|style|test
```

e.g:

- `refactor(api): github oauth flow #52`
- `merge: update contributing guides and tsconfigs #39`
- `perf(web): decrease page loading time #26`
- `release: @flex-development/tutils@1.0.0 #13`

## Releasing

This repository is configured to publish packages and releases when a
`release/*` branch is merged.

> Note: Publishing is executed via the [Continuous Deployment](./.github/workflows/cd.yml)
> workflow. This is so invalid or malicious versions cannot be released without
> merging those changes into `next` first.

Before releasing, the following steps must be completed:

1. Schedule a code freeze
2. Create a new `release/*` branch
   - where `*` is `<package.json#name-no-scope>@<package.json#version>`
     - e.g: `tutils@1.1.0`
   - branch naming conventions **must be followed exactly**. the branch name is
     used to create distribution tags, locate drafted releases, and generate the
     correct workspace publish command
   - `git chbr tutils@1.1.0`
3. Decide what version bump the release needs (major, minor, patch)
   - versioning
     - `yarn release` (determines [bumps based on commits][13])
     - `yarn release --first-release`
     - `yarn release --release-as major`
     - `yarn release --release-as minor`
     - `yarn release --release-as patch`
   - a new release will be drafted
4. Open a new pull request from `release/*` into `next`
   - title the PR `release: <package.json#name>@<package.json#version>`
     - e.g: `release: @flex-development/tutils@1.1.0`
   - link all issues being released
   - after review, `squash and merge` the PR:
     `release: @flex-development/tutils@1.1.0 (#pull-request-n)`
     - e.g: `release: @flex-development/tutils@1.1.0 (#3)`
   - once the PR is merged, the deployment workflow will be triggered
   - the PR reviewer should check to make sure the workflow completes all jobs
     as expected.
     - if successful, the workflow will:
       - wait for the [`ci`](.github/workflows/ci.yml) job to succeed
       - publish package to the [GitHub Package Registry][14] and [NPM][15]
       - update the production branch (merge branch `next` into `main`)
       - publish the drafted release
   - the PR reviewer should go through the PR's linked issues and:
     - make sure all issues are closed and have the label `status:merged`
     - add the `status:released` label to all issues

[1]: https://yarnpkg.com/getting-started/migration
[2]: https://yarnpkg.com/advanced/lifecycle-scripts#environment-variables
[3]: https://github.com/typicode/husky
[4]: https://conventionalcommits.org
[5]: https://github.com/conventional-changelog/commitlint
[6]: https://dprint.dev
[7]: https://eslint.org
[8]: https://jsdoc.app
[9]: https://github.com/gajus/eslint-plugin-jsdoc
[10]: https://mochajs.org
[11]: https://chaijs.com
[12]: https://mochajs.org/#inclusive-tests
[13]: https://conventionalcommits.org/en/v1.0.0
[14]: https://github.com/features/packages
[15]: https://npmjs.com
