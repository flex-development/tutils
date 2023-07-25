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
import type Nilable from './nilable'
import type NumberString from './number-string'
import type Objectify from './objectify'
import type Path from './path'

/**
 * Flattens `T` to a single dimension.
 *
 * Nested keys will be expressed using dot-notation. Non-enumerable paths and
 * top-level symbols are not preserved.
 *
 * @see {@linkcode Path}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
type Crush<T extends Nilable<object>> = IsAnyOrNever<T> extends true
  ? Objectify<T>
  : T extends unknown
  ? Path<T, true> extends infer P extends NumberString
    ? Exclude<
        P,
        P extends NumberString
          ? Get<T, P> extends infer V
            ? V extends string
              ? Join<[P, Indices<V>], Dot>
              : V extends readonly unknown[]
              ? Indices<V> extends infer I extends number
                ? number extends I
                  ? never
                  : I extends unknown
                  ? IfNegative<I, Join<[P, I, string] | [P, I], Dot> | P, never>
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
      > extends infer Q extends P
      ? {
          [K in Q as IfNever<Extract<Q, Join<[K, any], Dot>>, K, never>]: Get<
            T,
            K
          >
        }
      : never
    : never
  : never

export type { Crush as default }
