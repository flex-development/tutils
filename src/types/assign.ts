/**
 * @file Type Definitions - Assign
 * @module tutils/types/Assign
 */

import type EmptyObject from './empty-object'
import type HasKeys from './has-keys'
import type IsAny from './is-any'
import type IsEqual from './is-equal'
import type IsNever from './is-never'
import type Nilable from './nilable'
import type ObjectCurly from './object-curly'
import type OmitIndexSignature from './omit-index-signature'
import type OneOrMany from './one-or-many'
import type PropertyKey from './property-key'
import type Simplify from './simplify'

/**
 * Assigns properties of `H` to `T`.
 *
 * @internal
 *
 * @template T - Target object
 * @template H - Source object
 */
type Assigner<T extends ObjectCurly, H> = IsAny<H> extends true
  ? Simplify<Record<PropertyKey, any> & T>
  : IsNever<H> extends true
  ? T
  : HasKeys<H> extends true
  ? IsEqual<T, H> extends true
    ? T
    : H extends unknown
    ? {
        [K in keyof (H & {
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
  T extends Nilable<ObjectCurly>,
  U extends OneOrMany<ObjectCurly> = EmptyObject
> = T extends ObjectCurly
  ? IsAny<U> extends true
    ? Simplify<Record<PropertyKey, any> & T>
    : IsNever<U> extends true
    ? T
    : U extends ObjectCurly
    ? Assigner<T, U>
    : U extends readonly ObjectCurly[]
    ? U extends readonly [infer H, ...infer R extends ObjectCurly[]]
      ? Assign<Assigner<T, H>, R>
      : Assigner<T, U[0]>
    : never
  : never

export type { Assign as default }
