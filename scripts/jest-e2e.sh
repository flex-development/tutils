#!/bin/zsh

# Custom Jest E2E Workflow Script
# See: https://jestjs.io/docs/next/cli

# 1. Clear terminal
# 2. Set environment variables - https://github.com/entropitor/dotenv-cli
# 3. Clear cache
# 4. Run Jest with e2e config + global flags and allow for additional arguments
clear
dotenv -e .env.test -- echo "✨ Set test environment variables."
jest --clearCache
jest --config=jest.config.e2e.ts --detectOpenHandles --passWithNoTests $@
