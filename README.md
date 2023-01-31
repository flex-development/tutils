# tutils

[![npm](https://img.shields.io/npm/v/@flex-development/tutils.svg)](https://npmjs.com/package/@flex-development/tutils)
[![module type: cjs+esm](https://img.shields.io/badge/module%20type-cjs%2Besm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/tutils.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[TypeScript][1] utilities.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [Related](#related)

## What is this?

This package contains a set of general [TypeScript][1] utilities. It includes enums, interfaces, types, and type guards.

## When should I use this?

**TODO**: when should i use this?

## Install

```sh
yarn add @flex-development/tutils
```

From Git:

```sh
yarn add @flex-development/tutils@flex-development/tutils
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

```typescript
import type { Nullable, Path } from '@flex-development/tutils'

/**
 * Object representing a `User` entity **(from the database)**.
 *
 * **Does not include any [virtual fields][1]**.
 *
 * [1]: https://sequelize.org/v7/manual/getters-setters-virtuals#virtual-fields
 */
interface IUser {
  created_at: number
  email: Lowercase<string>
  id: number
  name: { first: Nullable<string>; last: Nullable<string> }
  updated_at: Nullable<number>
}

/** {@linkcode IUser} attributes. */
type UserAttribute = Path<IUser> // 'created_at' | 'email' | 'id' | 'name' | 'name.first' | 'name.last' | 'updated_at'

export type { IUser as default, UserAttribute }
```

## Related

- [`pkg-types`][2] - TypeScript definitions for `package.json`
- [`tsconfig-types`][3] - TypeScript definitions for `tsconfig.json`

[1]: https://typescriptlang.org/
[2]: https://github.com/flex-development/pkg-types
[3]: https://github.com/flex-development/tsconfig-types
