# tutils

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![module type: cjs+esm](https://img.shields.io/badge/module%20type-cjs%2besm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![npm](https://img.shields.io/npm/v/@flex-development/tutils.svg)](https://npmjs.com/package/@flex-development/tutils)
[![license](https://img.shields.io/github/license/flex-development/tutils.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

> TypeScript utilities.

## Install

```sh
yarn add @flex-development/tutils
```

### GitHub Package Registry

To install from the GitHub Package Registry, setup a `.npmrc` or `.yarnrc.yml`
file to authenticate with the registry. A [Personal Access Token with at least
the `read:packages` scope][1] is required.

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

### Git

For details on requesting a specific branch, commit, or tag, see
[npm-install][2] or [Git - Protocols | Yarn][3].

#### NPM

```sh
npm i flex-development/tutils
```

#### Yarn

```sh
yarn add @flex-development/tutils@flex-development/tutils
```

## Usage

```typescript
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

[1]:
  https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries
[2]: https://docs.npmjs.com/cli/v8/commands/npm-install#description
[3]: https://yarnpkg.com/features/protocols#git
