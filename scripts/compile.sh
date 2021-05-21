#!/bin/zsh

# Package Compilation Workflow
# See: https://github.com/cevek/ttypescript

# 1. Remove existing `dist` directory
# 2. Compile package with ttypescript
# 3. Fix node module import paths
# 4. Create `package.json` file in `dist` directory
# 5. Copy `CHANGELOG`, `LICENSE`, and `README` to `dist` directory
rm -rf dist || true
ttsc -p tsconfig.prod.json
node scripts/js/fix-node-module-paths
node scripts/js/create-dist-package-json
cp README.md LICENSE.md CHANGELOG.md ./dist || true
