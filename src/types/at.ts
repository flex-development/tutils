/**
 * @file Type Definitions - At
 * @module tutils/types/At
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type Fallback from './fallback'
import type IfAny from './if-any'
import type IfAnyOrNever from './if-any-or-never'
import type IfNever from './if-never'
import type Integer from './integer'
import type Intersection from './intersection'
import type IsNever from './is-never'
import type Join from './join'
import type Length from './length'
import type Nilable from './nilable'
import type NumberLike from './number-like'
import type Numeric from './numeric'
import type NegativeNumeric from './numeric-negative'
import type Optional from './optional'
import type NaturalRange from './range-natural'
import type Reverse from './reverse'
import type Split from './split'
import type Stringify from './stringify'

/**
 * Indexes array `T` at `K`.
 *
 * Supports negative indices.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 *
 * @internal
 *
 * @template T - Type to evaluate
 * @template K - Index
 * @template F - Fallback value type
 */
type Index<
  T extends readonly unknown[],
  K extends NumberLike,
  F
> = T extends Readonly<EmptyArray>
  ? F
  : IfAny<
      K,
      Fallback<number extends Length<T> ? Optional<T[number]> : T[number], F>,
      IfNever<
        K,
        F,
        K extends NumberLike
          ? Stringify<K> extends infer X extends Exclude<NumberLike, number>
            ? Length<T> extends infer L extends number
              ? IfNever<
                  L,
                  F,
                  IsNever<
                    Intersection<
                      NegativeNumeric | Numeric | Stringify<Integer>,
                      X
                    >
                  > extends false
                    ? Fallback<number extends L ? Optional<T[L]> : T[number], F>
                    : number extends L
                    ? Fallback<Optional<T[L]>, F>
                    : NaturalRange<L> extends infer R extends number
                    ? Exclude<
                        Join<['-', L | R], EmptyString> | Stringify<R>,
                        '-0'
                      > extends infer I
                      ? X extends I
                        ? 1 extends Length<Required<T>>
                          ? Fallback<T[0], F>
                          : X extends `-${infer N extends number}`
                          ? Reverse<T> extends infer B extends readonly T[number][]
                            ? Fallback<[any, ...B][N], F>
                            : never
                          : X extends `${infer N extends number}`
                          ? Fallback<T[N], F>
                          : never
                        : F
                      : never
                    : never
                >
              : never
            : F
          : F
      >
    >

/**
 * Converts a string to an array.
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
> = IfAnyOrNever<
  T,
  F,
  IfNever<
    K,
    F,
    T extends string | readonly unknown[]
      ? K extends NumberLike
        ? T extends string
          ? Index<Splitter<T>, K, F>
          : T extends readonly unknown[]
          ? Index<T, K, F>
          : never
        : never
      : F
  >
>

export type { At as default }
