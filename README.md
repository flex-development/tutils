# tutils

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)
[![license](https://img.shields.io/github/license/flex-development/loadenv.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@flex-development/tutils.svg?style=flat)](https://npmjs.com/package/@flex-development/tutils)

## Overview

[Getting Started](#getting-started)\
[Install](#install)\
[Usage](#usage)\
[Contributing](CONTRIBUTING.md)

## Getting Started

Enums, interfaces, type guards and definitions, and other shared [TypeScript][1]
modules.

## Install

```zsh
yarn add @flex-development/tutils # or npm i @flex-development/tutils
```

### GitHub Package Registry

To install from the GitHub Package Registry, setup a `.npmrc` or `.yarnrc.yml`
file to authenticate with the registry. A [Personal Access Token with at least
the `read:packages` scope][2] is required.

#### `.npmrc`

```utf-8
//npm.pkg.github.com/:_authToken=${GH_PAT}
@flex-development:registry=https://npm.pkg.github.com/
```

#### `.yarnrc.yml`

```yaml
npmRegistries:
  //npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: ${GH_PAT}

npmScopes:
  flex-development:
    npmRegistryServer: https://npm.pkg.github.com
```

## Usage

```typescript
/**
 * @file Users Subdomain Interfaces - IUserRaw
 * @module sneusers/subdomains/users/interfaces/IUserRaw
 */

import type {
  NullishNumber,
  NullishString,
  OrNull,
  Path
} from '@flex-development/tutils'

/**
 * Object representing a `User` entity **(from the database)**.
 *
 * **Does not include any [virtual fields][1]**.
 *
 * [1]: https://sequelize.org/v7/manual/getters-setters-virtuals#virtual-fields
 */
interface IUserRaw {
  created_at: number
  email: Lowercase<string>
  id: number
  name: { first: NullishString; last: NullishString }
  updated_at: NullishNumber
}

/** {@link IUserRaw} attributes. */
type UserRawAttribute = Path<IUserRaw> // 'created_at' | 'email' | 'id' | 'name' | 'name.first' | 'name.last' | 'updated_at'

export { type IUserRaw as default, type UserRawAttribute }
```

### Exports

- Enums: [`src/enums`](src/enums/index.ts)
- Type Definitions: [`src/types`](src/types/index.ts)
- Type Guards: [`src/guards`](src/guards/index.ts)

## Development

```zsh
git clone https://github.com/flex-development/tutils
cd tutils
yarn
```

[1]: https://typescriptlang.org
[2]: https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries
