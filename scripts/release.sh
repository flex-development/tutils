#!/bin/zsh

# Release Workflow
# Restrict package releases (and publishing) to one branch
# See: https://github.com/conventional-changelog/standard-version
# See: https://github.com/ddopson/underscore-cli

# Get branch where releases are enabled
# Note: underscore-cli will throw an error if `release` is undefined
ALLOW_BRANCH=$(cat package.json | underscore extract 'release.allowBranch')

# Get current branch
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

# Check if `$ALLOW_BRANCH` is equal to `$CURRENT_BRANCH`
if [[ $ALLOW_BRANCH != "\"$CURRENT_BRANCH\"" ]]; then
  echo Releases are restricted to branch $ALLOW_BRANCH.
  exit 0
fi

# PRE-RELEASE WORKFLOW
# 1. Pull commits from `origin/$CURRENT_BRANCH`
# 2. Get latest updates from `next` branch
# 3. Run test suites (without cache)
# 4. Push changes
git pull
git rebase origin/next
yarn test --no-cache
git pnv

# RELEASE WORKFLOW
# 1. Stage release artifacts
# 2. Automate versioning and CHANGELOG generation (with CLI arguments)
# 3. Push Git tags
# 4. Compile project (must be executed after CHANGELOG generation)
# 5. Publish package from `dist` directory
# 6. Create GitHub release
git add .
standard-version -a --no-verify $@
git push --follow-tags origin $CURRENT_BRANCH --no-verify
yarn compile
yarn --cwd dist publish
yarn release:github
