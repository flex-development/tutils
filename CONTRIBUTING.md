# Contributing Guide

This document aims to describe the workflows and rules used for developing this
project. This includes, but is not limited to:

- how to contribute code (coding standards, testing, documenting source code)
- how pull requests are handled
- how to file bug reports

## Overview

[Getting Started](#getting-started)  
[Contributing Code](#contributing-code)  
[Labels](#labels)  
[Opening Issues](#opening-issues)  
[Pull Requests & Code Reviews](#pull-requests-&-code-reviews)  
[Merge Strategies](#merge-strategies)  
[Releasing](#releasing)

## Getting Started

### Terminology

People interacting with the `tutils` project are grouped into 4 categories:

- **owner**: `flex-development` organization owners with full admin rights
- **maintainer**: owners and people added to the organization who actively
  contribute to projects and have direct push access
- **contributor**: someone who has helped improve any projects, but does not
  have direct push access
- **user**: developers who use any `flex-development` projects and may or may
  not participate in discussions regarding a given project

#### Additional Terminology

- **contribution**:
  - new features
  - engaging in discussions for new feature requests
  - documentation **fixes**
  - bug reports with reproducible steps
  - answering questions
- **ticket**: [JIRA][1] issue

### Git Configuration

The examples in this guide contain references to custom Git aliases.

Copy the [starter Git global configuration](.github/.gitconfig) to follow along
fully, as well as begin extending your own workflow.

### Yarn

This project uses Yarn 2 (`v3.0.1`). The Yarn configuration for this project can
be found in [`.yarnrc.yml`](.yarnrc.yml). If you're already using Yarn globally,
see the [Yarn 2 Migration docs][2].

### GitHub Packages

Some workspaces depend on scoped packages (e.g: `@flex-development`). Some of
those packages are published to the [GitHub Package Registry][3], but **_not to
NPM_**. A GitHub Personal Access Token is required for [installation][4].

Scopes, their registry servers, and required environment variables are defined
in [`.yarnrc.yml`](.yarnrc.yml) under the `npmScopes` field.

Before [cloning and installing the project](#clone-&-install), you'll need to
add the `PAT_GPR` variable to your shell:

1. Retrieve `PAT_GPR` from a project maintainer
2. Open `~/.bash_profile`, `~/.zprofile`, `~/.zshenv`, **or** `~/.zshrc`
3. Save file and re-launch shell

### Clone & Install

```zsh
git clone https://github.com/flex-development/tutils
cd tutils
yarn
```

Note that if you have a global Yarn configuration (or any `YARN_*` environment
variables set), an error will be displayed in the terminal if any settings
conflict with the project's Yarn configuration, or the Yarn 2 API. An error will
also be displayed if you're missing any environment variables.

### Environment Variables

All environment variables are documented in [`package.json`](./package.json)
under the `env.optional` and `env.required` fields.

#### `NODE_OPTIONS`

Running a `ts-node` command? Conditionally require `tsconfig-paths/register` to
run scripts that use path aliases:

1. Open `~/.bash_profile`, `~/.zprofile`, **or** `~/.zshrc`
2. Conditionally append `-r <path/to/import>`

   ```zsh
   if [ -f "$PWD/node_modules/tsconfig-paths/register.js" ]; then
     export NODE_OPTIONS="$NODE_OPTIONS -r tsconfig-paths/register"
   fi
   ```

3. Run your script:

   ```zsh
   ts-node scratchpad-with-path-aliases
   ```

   _instead of_

   ```zsh
   NODE_OPTIONS='-r tsconfig-paths/register' ts-node scratchpad-with-path-aliases
   ```

Note: Workspaces that require custom option must use an `.env.*` file to set
`NODE_OPTIONS`.

## Contributing Code

[Husky][5] is used to run Git hooks that locally enforce coding and commit
message standards, as well run tests associated with any files changed since the
last commit.

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
git feat P008-1-repository-setup
```

will create a new branch titled `feat/P008-1-repository-setup`.

### Commit Messages

This project follows [Conventional Commit][6] standards and uses [commitlint][7]
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

For example:

```zsh
git chore "add eslint configuration"
```

will produce the following commit: `chore: add eslint configuration`

To include an inline code snippet in your commit message, be sure to escape your
backticks:

```zsh
git ac "chore(scripts): add \`release\` workflow script"
```

See [`commitlint.config.js`](commitlint.config.js) for an exhasutive list of
valid commit scopes and types.

### Code Style

[Prettier][8] is used to format code, and [ESLint][9] to lint files.

**Prettier Configuration**

- [`.prettierrc.js`](.prettierrc.js)
- [`.prettierignore`](.prettierignore)

**ESLint Configuration**

- [`.eslintrc.js`](.eslintrc.js)
- [`.eslintignore`](.eslintignore)

### Making Changes

All source code can be found in the [`src`](src/) directory.

The purpose of each file should be documented using the `@file` annotation,
along with an accompanying `@module` annotation.

### Documentation

- JavaScript & TypeScript: [JSDoc][10], linted with [`eslint-plugin-jsdoc`][11]

Before making a pull request, be sure your code is well documented, as it will
be part of your code review.

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

### Merge Strategies

In every repository, the `create a merge commit` and `squash and merge` options
are enabled.

- if a PR has a single commit, or the changes across commits are logically
  grouped, use `squash and merge`
- if a PR has multiple commits, not logically grouped, `create a merge commit`

When merging, please make sure to use the following commit message format:

```txt
merge: <TICKET-ID> (#pull-request-n)
        │            │
        │            └─⫸ check your pull request
        │
        └─⫸ check jira issue
```

e.g: `merge: P008-1 (#1)`

## Releasing

This repository is configured to publish packages and releases when a
`release/*` branch is merged.

> Note: Publishing is executed via the
> [Continuous Deployment](./.github/workflows/continous-deployment.yml)
> workflow. This is so invalid or malicious versions cannot be release without
> merging those changes into `next` first.

Before releasing, the following steps must be completed:

1. Schedule a code freeze
2. Create a new `release/*` branch
   - where `*` is `v<package.json#version>`
     - e.g: `v1.1.0`
   - branch naming conventions **must be followed exactly**. the branch name is
     used to create distribution tags, locate drafted releases, and generate the
     correct workspace publish command
3. Decide what version bump the release needs (major, minor, patch)
   - versioning
     - `yarn release` (determines [bumps based on commits][12])
     - `yarn release --first-release`
     - `yarn release --release-as major`
     - `yarn release --release-as minor`
     - `yarn release --release-as patch`
   - a new release will be drafted
4. Open a new pull request from `release/*` into `next`
   - title the PR `release: *`
     - e.g: `release: v1.1.0`
   - after review, merge the PR with a merge commit
     - merge commit name: `merge: release *`
       - e.g: `merge: release v1.1.0`
   - once the PR is merged, the deployment workflow will be triggered
   - the maintainer who is approved the PR should check to make sure the
     workflow completes all jobs as expected. if successful, the workflow will:
     - publish the drafted release
     - publish package to the [GitHub Package Registry][13] and [NPM][14]
     - update the production branch (merge branch `next` into `main`)
     - close issues with the `status:merged` label
     - add the `status:released` label to newly closed issues

[1]: https://www.atlassian.com/software/jira
[2]: https://yarnpkg.com/getting-started/migration
[3]: https://github.com/features/packages
[4]: https://docs.github.com/packages/learn-github-packages/installing-a-package
[5]: https://github.com/typicode/husky
[6]: https://www.conventionalcommits.org
[7]: https://github.com/conventional-changelog/commitlint
[8]: https://prettier.io
[9]: https://eslint.org
[10]: https://jsdoc.app
[11]: https://github.com/gajus/eslint-plugin-jsdoc
[12]: https://www.conventionalcommits.org/en/v1.0.0
[13]: https://github.com/features/packages
[14]: https://www.npmjs.com
