/**
 * @file Type Definitions - Defaults
 * @module tutils/types/Defaults
 */

import type EmptyObject from './empty-object'
import type Fallback from './fallback'
import type HasKey from './has-key'
import type IsAnyOrNever from './is-any-or-never'
import type IsEqual from './is-equal'
import type IsUndefined from './is-undefined'
import type ObjectCurly from './object-curly'
import type Objectify from './objectify'
import type OneOrMany from './one-or-many'
import type ReconstructArray from './reconstruct-array'

/**
 * Assigns default properties to `T`.
 *
 * @internal
 *
 * @template T - Target object
 * @template U - Source object
 */
// dprint-ignore
type Defaulter<T extends Objectify<any>, U> = IsEqual<T, U> extends true
  ? T
  : U extends ObjectCurly
  ? {
      [K in keyof ({
        [K in keyof Objectify<T> as HasKey<U, K> extends true
          ? IsUndefined<T[K]> extends false
            ? K
            : never
          : K]: K
      } & {
        [K in keyof U as HasKey<T, K> extends true
          ? IsUndefined<T[K]> extends false
            ? never
            : K
          : K]: K
      })]: HasKey<U, K> extends true
        ? U[K] extends infer W
          ? HasKey<T, K> extends true
            ? Fallback<T[K], W>
            : W
          : never
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
 * Assigns properties from one or more source objects to target object `T` for
 * all target properties that **distributively** extend `undefined`. Properties
 * that are exclusive to source objects will also be assigned.
 *
 * Source objects are applied from left to right. Subsequent default values are
 * ignored if a property no longer distributively extends `undefined`.
 *
 * @todo examples
 *
 * @template T - Target object
 * @template U - Source object or source object array
 */
type Defaults<
  T extends object,
  U extends Readonly<OneOrMany<ObjectCurly>> = EmptyObject
> = // dprint-ignore
  IsAnyOrNever<U> extends true
  ? Defaulter<T, Objectify<U>>
  : T extends unknown
  ? U extends ObjectCurly
    ? Defaulter<T, Objectify<U>>
    : U extends readonly ObjectCurly[]
    ? U extends readonly [infer H, ...infer R extends ObjectCurly[]]
      ? Defaults<Defaulter<T, Objectify<H>>, R>
      : Defaulter<T, Objectify<U[0]>>
    : never
  : never

export type { Defaults as default }
