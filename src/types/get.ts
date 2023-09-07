/**
 * @file Type Definitions - Get
 * @module tutils/types/Get
 */

import type At from './at'
import type Dot from './dot'
import type Fallback from './fallback'
import type Intersection from './intersection'
import type IsAny from './is-any'
import type IsNever from './is-never'
import type Join from './join'
import type NumberLike from './number-like'
import type Objectify from './objectify'
import type OmitIndexSignature from './omit-index-signature'
import type PropertyKey from './property-key'
import type Stringify from './stringify'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Retrieves a property value from `T`.
 *
 * Supports dot-notation for nested object paths and array-indexing.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Property to select
 * @template F - Fallback value type
 */
// dprint-ignore
type Get<T, K extends PropertyKey, F = undefined> = IsNever<T> extends true
  ? F
  : IsNever<K> extends true
  ? F
  : T extends unknown
  ? K extends unknown
    ? Objectify<T> extends infer U extends Objectify<any>
      ? IsAny<K> extends true
        ?
            | Fallback<U[keyof OmitIndexSignature<U>], F>
            | (T extends string | readonly unknown[]
                ? At<T, any, F>
                : Fallback<U[keyof U], F>)
        : K extends Join<[infer H extends string, infer R extends string], Dot>
        ? K extends Intersection<K, keyof U>
          ? Fallback<U[K], F>
          : Get<Get<T, H, F>, R, F>
        : K extends Stringify<keyof U> | UnwrapNumeric<keyof U> | keyof U
        ? K extends NumberLike
          ? T extends string | readonly unknown[]
            ? At<T, K, F>
            : Fallback<U[K], F>
          : Fallback<U[K], F>
        : F
      : never
    : never
  : never

export type { Get as default }
