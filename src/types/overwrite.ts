/**
 * @file Type Definitions - Overwrite
 * @module tutils/types/Overwrite
 */

import type EmptyObject from './empty-object'
import type HasKey from './has-key'
import type IsAnyOrNever from './is-any-or-never'
import type IsEqual from './is-equal'
import type ObjectCurly from './object-curly'
import type Objectify from './objectify'
import type OneOrMany from './one-or-many'

/**
 * Assigns mutual properties of `T` and `U` to `T`.
 *
 * @internal
 *
 * @template T - Target object
 * @template U - Source object
 */
type Overwriter<T extends Objectify<any>, U> = IsEqual<T, U> extends true
  ? T
  : U extends ObjectCurly
  ? {
      [K in keyof ({
        [K in keyof T as HasKey<U, K> extends true ? never : K]: K
      } & {
        [K in keyof U as HasKey<T, K> extends true ? K : never]: K
      })]: HasKey<U, K> extends true
        ? U[K]
        : HasKey<T, K> extends true
        ? T[K]
        : never
    } extends infer X extends Objectify<any>
    ? X
    : never
  : T

/**
 * Assigns properties from one or more source objects to target object `T` for
 * all mutual properties in `T`. A mutual property is a property that exists on
 * both `T` and a source object.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * @todo examples
 *
 * @template T - Target object
 * @template U - Source object or source object array
 */
type Overwrite<
  T extends ObjectCurly,
  U extends Readonly<OneOrMany<ObjectCurly>> = EmptyObject
> = IsAnyOrNever<U> extends true
  ? Overwriter<T, Objectify<U>>
  : T extends unknown
  ? U extends ObjectCurly
    ? Overwriter<T, Objectify<U>>
    : U extends readonly ObjectCurly[]
    ? U extends readonly [infer H, ...infer R extends ObjectCurly[]]
      ? Overwrite<Overwriter<T, Objectify<H>>, R>
      : Overwriter<T, Objectify<U[0]>>
    : never
  : never

export type { Overwrite as default }
