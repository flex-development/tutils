# tutils

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)
[![license](https://img.shields.io/github/license/flex-development/loadenv.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@flex-development/tutils.svg?style=flat)](https://npmjs.com/package/@flex-development/tutils)

## Overview

[Getting Started](#getting-started)\
[Install](#install)\
[Usage](#usage)\
[Contributing](./CONTRIBUTING.md)

## Getting Started

Enums, type guards and definitions, and other shared [TypeScript][1] modules.

## Installation

```zsh
yarn add @flex-development/tutils # or npm i @flex-development/tutils
```

## Usage

```typescript
import type { ObjectPath } from '@flex-development/tutils'

const object = {
  top_level: true,
  nested: { data: true }
}

const object_top_level_path: ObjectPath<typeof object> = 'top_level'
const object_nested_data_path: ObjectPath<typeof object> = 'nested.data'
```

### Exports

- Enums: [`src/enums`](./src/enums/)
- Type Definitions: [`src/types`](./src/types/)
- Type Guards: [`src/guards`](./src/guards/)
