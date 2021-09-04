# Tutils

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)

## Overview

[Getting Started](#getting-started)  
[Installation](#installation)  
[Usage](#usage)  
[Built With](#built-with)  
[Contributing](./CONTRIBUTING.md)

## Getting Started

[TypeScript][1] utilities.

## Installation

1. Create or edit an `.npmrc` file with the following information:

   ```utf-8
   @flex-development:registry=https://npm.pkg.github.com/
   ```

2. Add project to `dependencies`

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

[See all type definitions](src/index.ts).

## Built With

- [TypeScript][1] - Typed JavaScript

[1]: https://www.typescriptlang.org
