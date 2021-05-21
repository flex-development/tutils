#!/bin/zsh

# Custom Jest Workflow Script
# See: https://jestjs.io/docs/next/cli

# 1. Clear terminal
# 2. Set environment variables - https://github.com/entropitor/dotenv-cli
# 3. Run Jest with global flags and allow for additional arguments
clear
dotenv -e .env.test -- echo "✨ Set test environment variables."
jest --detectOpenHandles --passWithNoTests $@
