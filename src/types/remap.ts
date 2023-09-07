/**
 * @file Type Definitions - Remap
 * @module tutils/types/Remap
 */

import type At from './at'
import type IfOptionalKey from './if-key-optional'
import type IfExactOptionalKey from './if-key-optional-exact'
import type IfReadonlyKey from './if-key-readonly'
import type IfRequiredKey from './if-key-required'
import type IfNever from './if-never'
import type Indices from './indices'
import type Intersection from './intersection'
import type IsAnyOrNever from './is-any-or-never'
import type Objectify from './objectify'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Construct an object type from `T`.
 *
 * Indices of `T`, both positive and negative, are included when `T` is a tuple
 * or string literal.
 *
 * @see {@linkcode Objectify}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
// dprint-ignore
type Remap<T> = IsAnyOrNever<T> extends true
  ? Objectify<T>
  : T extends unknown
  ? Objectify<T> extends infer U
    ? T extends string | readonly unknown[]
      ? Indices<T> extends infer I extends number
        ? number extends I
          ? U
          : T extends string
          ? {
              [H in keyof (U & { [N in I]: N })]: H extends I
                ? At<T, H>
                : number extends H
                ? At<T, H & number>
                : H extends keyof U
                ? U[H]
                : never
            }
          : {
              [H in keyof ({
                [K in keyof U as IfNever<
                  Intersection<I, UnwrapNumeric<K>>,
                  K,
                  never
                >]: K
              } & {
                [N in I as IfOptionalKey<T, N, N, never>]?: N
              } & {
                [N in I as IfRequiredKey<T, N, N, never>]: N
              })]: H extends I
                ? At<T, H, IfExactOptionalKey<T, H, never, undefined>>
                : H extends keyof U
                ? U[H]
                : never
            } extends infer W
          ? {
              [H in keyof ({
                [H in keyof W as IfReadonlyKey<T, H, never, H>]: H
              } & {
                readonly [H in keyof W as IfReadonlyKey<T, H, H, never>]: H
              })]: H extends keyof W ? W[H] : never
            }
          : never
        : never
      : U
    : never
  : never

export type { Remap as default }
