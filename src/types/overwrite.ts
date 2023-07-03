/**
 * @file Type Definitions - Overwrite
 * @module tutils/types/Overwrite
 */

import type EmptyObject from './empty-object'
import type HasKeys from './has-keys'
import type IsAnyOrNever from './is-any-or-never'
import type IsEqual from './is-equal'
import type ObjectCurly from './object-curly'
import type OmitIndexSignature from './omit-index-signature'
import type OneOrMany from './one-or-many'

/**
 * Assigns mutual properties of `H` to `T`.
 *
 * @internal
 *
 * @template T - Target object
 * @template H - Source object
 */
type Overwriter<T extends ObjectCurly, H> = IsAnyOrNever<H> extends true
  ? T
  : HasKeys<H> extends true
  ? IsEqual<T, H> extends true
    ? T
    : H extends unknown
    ? {
        [K in keyof ({
          [K in keyof H as K extends keyof T ? K : never]: K
        } & {
          [K in keyof T as K extends keyof OmitIndexSignature<H> ? never : K]: K
        })]: K extends keyof OmitIndexSignature<H>
          ? K extends keyof H
            ? H[K]
            : never
          : K extends keyof OmitIndexSignature<T>
          ? T[K]
          : K extends keyof H
          ? H[K]
          : K extends keyof T
          ? T[K]
          : never
      }
    : T
  : T

/**
 * Assigns properties from one or more source objects to target object `T` for
 * all mutual properties in `T`.
 *
 * A mutual property is a property that is contained in both target object `T`
 * and a source object.
 *
 * Source objects are applied from left to right.
 *
 * @todo examples
 *
 * @template T - Target object
 * @template U - Source object or source object array
 */
type Overwrite<
  T extends ObjectCurly,
  U extends OneOrMany<ObjectCurly> = EmptyObject
> = T extends ObjectCurly
  ? IsAnyOrNever<U> extends true
    ? T
    : U extends ObjectCurly
    ? Overwriter<T, U>
    : U extends readonly ObjectCurly[]
    ? U extends readonly [infer H, ...infer R extends ObjectCurly[]]
      ? Overwrite<Overwriter<T, H>, R>
      : Overwriter<T, U[0]>
    : never
  : never

export type { Overwrite as default }
