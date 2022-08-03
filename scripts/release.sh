#!/bin/sh

# Local Release Workflow
#
# References:
#
# - https://yarnpkg.com/cli/version
# - https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli

# 1. run tests
# 2. bump package version
# 3. update changelog
# 4. get new package version
# 5. get release branch name
# 6. switch to release branch
# 7. stage release assets
# 8. commit release assets
# 9. push release branch to origin

yarn test
yarn version -i $@
conventional-changelog -n ./changelog.config.json -i CHANGELOG.md -s
VERSION=$(fx package.json '.version')
RELEASE_BRANCH=release/$VERSION
git switch -c $RELEASE_BRANCH
git add CHANGELOG.md package.json
git commit -s -m "release: $(fx package.json '.name')@$VERSION" --no-verify
git push origin -u --no-verify $RELEASE_BRANCH
