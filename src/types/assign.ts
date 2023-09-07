/**
 * @file Type Definitions - Assign
 * @module tutils/types/Assign
 */

import type EmptyObject from './empty-object'
import type HasKey from './has-key'
import type IsAnyOrNever from './is-any-or-never'
import type IsEqual from './is-equal'
import type ObjectCurly from './object-curly'
import type Objectify from './objectify'
import type OneOrMany from './one-or-many'
import type ReconstructArray from './reconstruct-array'

/**
 * Assigns properties of `U` to `T`.
 *
 * @internal
 *
 * @template T - Target object
 * @template U - Source object
 */
// dprint-ignore
type Assigner<T extends Objectify<any>, U> = IsEqual<T, U> extends true
  ? T
  : U extends ObjectCurly
  ? {
      [K in keyof (U & {
        [K in keyof Objectify<T> as HasKey<U, K> extends true ? never : K]: K
      })]: HasKey<U, K> extends true
        ? U[K]
        : HasKey<T, K> extends true
        ? T[K]
        : never
    } extends infer X extends Objectify<any>
    ? X extends readonly unknown[]
      ? ReconstructArray<X>
      : X
    : never
  : T

/**
 * Assigns properties of one or more source objects to target object `T`.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * @todo examples
 *
 * @template T - Target object
 * @template U - Source object or source object array
 */
type Assign<
  T extends object,
  U extends Readonly<OneOrMany<ObjectCurly>> = EmptyObject
> = // dprint-ignore
  IsAnyOrNever<U> extends true
  ? Assigner<T, Objectify<U>>
  : T extends unknown
  ? U extends ObjectCurly
    ? Assigner<T, Objectify<U>>
    : U extends readonly ObjectCurly[]
    ? U extends readonly [infer H, ...infer R extends ObjectCurly[]]
      ? Assign<Assigner<T, Objectify<H>>, R>
      : Assigner<T, Objectify<U[0]>>
    : never
  : never

export type { Assign as default }
