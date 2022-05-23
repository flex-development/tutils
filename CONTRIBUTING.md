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

### Local Development

Follow the steps below to setup your local development environment:

1. Set Git username

   ```zsh
   git config --global user.username <github-username>
   ```

2. Open a shell startup file

   - e.g: `~/.bash_profile` `~/.bashrc`, `~/.profile`, `~/.zprofile`,
     `~/.zshenv`, `~/.zshrc`

3. Add the following to your chosen shell startup file:

   ```zsh
   [ -f $PWD/.env.defaults ] && . $PWD/.env.defaults
   [ -f $PWD/.env ] && . $PWD/.env
   [ -f $PWD/.env.local ] && . $PWD/.env.local

   export GIT_USERNAME=$(git config user.username)
   export PATH=$PWD/node_modules/.bin:$PATH
   ```

4. Save shell startup file and re-launch shell

5. Clone the repository

   ```zsh
   git clone https://github.com/flex-development/tutils
   cd tutils
   yarn
   ```

   If you have a global Yarn config (or any `YARN_*` environment variables set),
   an error will be displayed in the terminal if any settings conflict with the
   project's Yarn config, or the Yarn 2 API. An error will also be displayed if
   you're missing any environment variables.

6. Install `nvm`

   ```zsh
   brew install nvm
   ```

   Looking for a `curl` or `wget` command? Visit the [nvm install][2] guide.

7. Set node version

   ```zsh
   nvm use
   ```

### Environment Variables

#### Development

| name                 |
| -------------------- |
| `CI`                 |
| `GH_PAT`             |
| `NODE_ENV`           |
| `NPM_TOKEN`          |
| `PROJECT_CWD` **\*** |
| `SHELL` **\*\***     |
| `TS_NODE_PROJECT`    |

**\*** Provided by [Yarn 2 scripts and binaries][3]\
**\*\*** Provided by local machine

#### GitHub Actions

Variables are prefixed by `secrets.` in [workflow](.github/workflows/) files.

### Git Config

The examples in this guide contain references to custom Git aliases.

See [`.gitconfig`](.github/.gitconfig) for an exhaustive list.

## Contributing Code

[Husky][4] is used to locally enforce coding and commit message standards, as
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
[prefix]/<github-username>/<issue-number>-<branch_name>
 │        │                 │              │
 │        │                 │              └─⫸ a short, memorable name (possibly the future PR title)
 │        │                 │
 │        │                 └─⫸ check github issue
 │        │
 │        └─⫸ your github username
 │
 └─⫸ bugfix|feat|hotfix|release|support
```

For example:

```zsh
git chbf $GIT_USERNAME/4-authentication
```

will create a new branch titled `feat/<your-github-username>/4-authentication`.

### Commit Messages

This project follows [Conventional Commit][5] standards and uses [commitlint][6]
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

[dprint][7] is used to format code, and [ESLint][8] to lint files.

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

- JavaScript & TypeScript: [JSDoc][9], linted with [`eslint-plugin-jsdoc`][10]

Before making a pull request, be sure your code is well documented, as it will
be part of your code review.

### Testing

This project uses a [Mocha][11] x [Chai][12] workflow.

[Husky](#contributing-code) is configured to run tests before every push. If you
need to create a new issue regarding a test, or need to make a `wip` commit, use
`it.skip` to mark your tests as [pending][13].

#### Running Tests

- `yarn test`
- `yarn test:coverage`
  - Navigate to `http://localhost:5000` to see coverage output

### Getting Help

If you need help, make note of any issues in their respective files. Whenever
possible, create a test to reproduce the error. Make sure to label your issue as
`type:question` and `status:help-wanted`.

## Labels

This project uses a well-defined list of labels to organize issues and pull
requests. Most labels are scoped (i.e: `status:*`).

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

- **create a merge commit**: PR has multiple commits that are not grouped
- **squash and merge**: PR has a single commit or changes across commits are grouped

When merging, please make sure to use the following commit message format:

```zsh
<type>[optional scope]: <merge-request-title> (#merge-request-n)
 │     │                │
 │     │                └─⫸ check your merge request
 │     │
 │     └─⫸ see .commitlintrc.ts
 │
 └─⫸ build|ci|chore|docs|feat|fix|merge|perf|refactor|release|revert|style|test|wip
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
   - where `*` is `<package.json#name-no-scope>@<new-version>`
     - e.g: `tutils@1.1.0`
   - branch naming conventions **must be followed exactly**. the branch name is
     used to create distribution tags, locate drafted releases, and generate the
     correct workspace publish command
   - use the `git chbr` alias: `git chbr tutils@<new-version>`
3. Decide what version bump the release needs (major, minor, patch)
   - versioning
     - `yarn release` (determines [bumps based on commits][14])
     - `yarn release --first-release`
     - `yarn release --release-as major`
     - `yarn release --release-as minor`
     - `yarn release --release-as patch`
   - a new release will be drafted
4. Open a new pull request from `release/*` into `next`
   - title the PR `release: <package.json#name>@<new-version>`
     - e.g: `release: @flex-development/tutils@1.1.0`
   - link all issues being released
   - after review, `squash and merge` the PR:
     `release: @flex-development/tutils@<new-version> (#pull-request-n)`
     - e.g: `release: @flex-development/tutils@1.1.0 (#3)`
   - once the PR is merged, the deployment workflow will be triggered
   - the PR reviewer should check to make sure the workflow completes all jobs
     as expected.
     - if successful, the workflow will:
       - wait for the [`ci`](.github/workflows/ci.yml) job to succeed
       - publish package to the [GitHub Package Registry][15] and [NPM][16]
       - update the production branch (merge branch `next` into `main`)
       - publish the drafted release
   - the PR reviewer should go through the PR's linked issues and:
     - make sure all issues are closed and have the label `status:merged`
     - add the `status:released` label to all issues

[1]: https://yarnpkg.com/getting-started/migration
[2]: https://github.com/nvm-sh/nvm#install--update-script
[3]: https://yarnpkg.com/advanced/lifecycle-scripts#environment-variables
[4]: https://github.com/typicode/husky
[5]: https://conventionalcommits.org
[6]: https://github.com/conventional-changelog/commitlint
[7]: https://dprint.dev
[8]: https://eslint.org
[9]: https://jsdoc.app
[10]: https://github.com/gajus/eslint-plugin-jsdoc
[11]: https://mochajs.org
[12]: https://chaijs.com
[13]: https://mochajs.org/#inclusive-tests
[14]: https://conventionalcommits.org/en/v1.0.0
[15]: https://github.com/features/packages
[16]: https://npmjs.com
