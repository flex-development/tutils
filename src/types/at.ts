/**
 * @file Type Definitions - At
 * @module tutils/types/At
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type Fallback from './fallback'
import type IfNumber from './if-number'
import type IfNumeric from './if-numeric'
import type Indices from './indices'
import type Integer from './integer'
import type Intersection from './intersection'
import type IsAny from './is-any'
import type IsAnyOrNever from './is-any-or-never'
import type IsEqual from './is-equal'
import type IsNever from './is-never'
import type Nilable from './nilable'
import type NumberLike from './number-like'
import type OmitIndexSignature from './omit-index-signature'
import type Optional from './optional'
import type Reverse from './reverse'
import type Split from './split'
import type Stringify from './stringify'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Returns a boolean indicating if `K` can index `T` (i.e. `T[K]`) without the
 * use of an index signature.
 *
 * @internal
 *
 * @template T - Type to evaluate
 * @template K - Keys to evaluate
 */
type IsKey<
  T extends string | readonly unknown[],
  K extends NumberLike
> = IsAny<K> extends true
  ? false
  : T extends unknown
  ? K extends unknown
    ? IsEqual<
        K,
        keyof {
          [H in keyof OmitIndexSignature<T> as Intersection<
            H extends Intersection<H, Stringify<Indices<T>>>
              ? never
              : IfNumber<
                  H,
                  H | Stringify<H>,
                  IfNumeric<H, H | UnwrapNumeric<H>, H>
                >,
            K
          >]: H
        }
      >
    : false
  : never

/**
 * Construct an array from a string.
 *
 * @see {@linkcode Split}
 *
 * @internal
 *
 * @template T - String to convert
 */
type Splitter<T extends string> = Split<T, EmptyString>

/**
 * Get an item or character in `T` at `K`.
 *
 * Negative indices count from the end of `T`.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/at
 *
 * @example
 *  type X = At<['a', 'b'], 0>
 *  // 'a'
 * @example
 *  type X = At<['a', 'b'], 2>
 *  // undefined
 * @example
 *  type X = At<['a', 'b'?], 1, null>
 *  // 'b' | null
 * @example
 *  type X = At<['a', 'b', 'c'], -1>
 *  // 'c'
 * @example
 *  type X = At<['a', 'b', 'c'], -4, null>
 *  // null
 * @example
 *  type X = At<'abc', 2>
 *  // 'c'
 * @example
 *  type X = At<'abc', -2>
 *  // 'b'
 * @example
 *  type X = At<'abc', -4, null>
 *  // null
 * @example
 *  type X = At<string[], 0>
 *  // string | undefined
 * @example
 *  type X = At<string, 3>
 *  // string | undefined
 *
 * @template T - Type to evaluate
 * @template K - Zero-based index
 * @template F - Fallback value type
 */
type At<
  T extends Nilable<string | readonly unknown[]>,
  K extends NumberLike,
  F = undefined
> = IsAnyOrNever<T> extends true
  ? F
  : IsNever<K> extends true
  ? F
  : T extends string | readonly unknown[]
  ? K extends unknown
    ? IsKey<T, K> extends true
      ? Fallback<T[K extends keyof T ? K : UnwrapNumeric<K> & keyof T], F>
      : (
          T extends string ? Splitter<T> : T
        ) extends infer U extends readonly unknown[]
      ? U extends Readonly<EmptyArray>
        ? F
        : Indices<U> extends infer I extends number
        ? IsAny<K> extends true
          ? Fallback<number extends I ? Optional<U[I]> : U[I], F>
          : K extends Intersection<K, Integer | NumberLike | Stringify<Integer>>
          ? Fallback<number extends I ? Optional<U[I]> : U[I], F>
          : K extends I | Stringify<I>
          ? Stringify<K> extends infer X extends Exclude<NumberLike, number>
            ? X extends `-${infer N extends number}`
              ? number extends I
                ? Fallback<Optional<U[N]>, F>
                : [I] extends [-1 | 0]
                ? Fallback<U[0], F>
                : Fallback<[any, ...Reverse<U>][N], F>
              : X extends `${infer N extends number}`
              ? Fallback<number extends I ? Optional<U[N]> : U[N], F>
              : never
            : never
          : F
        : never
      : never
    : never
  : F

export type { At as default }
