/**
 * @file Type Definitions - Crush
 * @module tutils/types/Crush
 */

import type Dot from './dot'
import type Get from './get'
import type IfNegative from './if-negative'
import type IfNever from './if-never'
import type Indices from './indices'
import type IsAnyOrNever from './is-any-or-never'
import type Join from './join'
import type Keys from './keys'
import type Nilable from './nilable'
import type Objectify from './objectify'

/**
 * Flattens `T` to a single dimension.
 *
 * Nested keys will be expressed using dot-notation. Non-enumerable paths and
 * top-level symbols are not preserved.
 *
 * @see {@linkcode Keys}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
// dprint-ignore
type Crush<T extends Nilable<object>> = IsAnyOrNever<T> extends true
  ? Objectify<T>
  : T extends unknown
  ? Keys<T, { deep: true }>[number] extends infer K extends string
    ? Exclude<
        K,
        K extends unknown
          ? Get<T, K> extends infer V
            ? V extends string
              ? Join<[K, Indices<V>], Dot>
              : V extends readonly unknown[]
              ? Indices<V> extends infer I extends number
                ? number extends I
                  ? never
                  : I extends unknown
                  ? IfNegative<I, Join<[K, I, string] | [K, I], Dot> | K, never>
                  : never
                : never
              : T extends readonly unknown[]
              ? Indices<T> extends infer I extends number
                ? number extends I
                  ? never
                  : I extends unknown
                  ? IfNegative<I, I | Join<[I, string] | [I], Dot>, never>
                  : never
                : never
              : never
            : never
          : never
      > extends infer Q extends K
      ? {
          [H in Q as IfNever<
            Extract<Q, Join<[H, string], Dot>>,
            H,
            never
          >]: Get<T, H>
        }
      : never
    : never
  : never

export type { Crush as default }
