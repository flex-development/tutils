#!/bin/zsh

# Post Publish Workflow

# 1. Checkout `next` branch
# 2. Rebase origin/main (with new, recently published code) onto `next`
# 3. Push updates
git ch next
git rebase origin/main
git pnv
