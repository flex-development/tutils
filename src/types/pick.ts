/**
 * @file Type Definitions - Pick
 * @module tutils/types/Pick
 */

import type At from './at'
import type EnsureString from './ensure-string'
import type Get from './get'
import type Head from './head'
import type IfOptionalKey from './if-key-optional'
import type IfExactOptionalKey from './if-key-optional-exact'
import type IfRequiredKey from './if-key-required'
import type IfNever from './if-never'
import type IfTuple from './if-tuple'
import type IfUndefined from './if-undefined'
import type Join from './join'
import type NIL from './nil'
import type NumberString from './number-string'
import type Numeric from './numeric'
import type Simplify from './simplify'
import type Tail from './tail'

/**
 * From `T`, pick a set of properties whose keys are in the union `K`.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @template T - Type to evaluate
 * @template K - Keys to select
 */
type Pick<T, K extends NumberString> = Simplify<
  {
    [H in Head<`${K}`>]: Get<T, H> extends infer U
      ? Join<[H, NumberString]> extends infer J
        ? Extract<K, J> extends infer X
          ? IfNever<
              X,
              U,
              Tail<X> extends infer P
                ? NonNullable<U> extends readonly unknown[]
                  ? Head<P> extends infer HNext
                    ? HNext extends Numeric | number
                      ? At<NonNullable<U>, HNext> extends infer Item
                        ? IfUndefined<
                            Item,
                            [Item],
                            Pick<
                              NonNullable<Item>,
                              EnsureString<Tail<P>>
                            > extends infer Next
                              ? IfTuple<NonNullable<U>, [Next], Next[]>
                              : never
                          >
                        : never
                      : Pick<NonNullable<U>, EnsureString<P>>
                    : never
                  : Pick<NonNullable<U>, EnsureString<P>>
                : never
            >
          : never
        : never
      : never
  } extends infer R
    ? NonNullable<T> extends readonly unknown[]
      ? Extract<T, NIL> | R
      : {
          [K in keyof R as IfExactOptionalKey<T, K, K, never>]?: Exclude<
            R[K],
            undefined
          >
        } & {
          [K in keyof R as IfOptionalKey<
            T,
            K,
            IfExactOptionalKey<T, K, never, K>,
            never
          >]?: R[K]
        } & {
          [K in keyof R as IfRequiredKey<T, K, K, never>]: R[K]
        }
    : never
>

export type { Pick as default }
