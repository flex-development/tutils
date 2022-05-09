#!/bin/sh

# Testing Workflow
#
# References:
#
# - https://github.com/sindresorhus/trash-cli
# - https://github.com/istanbuljs/nyc
# - https://github.com/piotrwitek/ts-mocha
# - https://mochajs.org/#command-line-usage

# 1. Clear terminal
# 2. Remove stale coverage output
# 3. Run test suites
clear
trash coverage/
NODE_ENV=test nyc ts-mocha $@
