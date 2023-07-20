/**
 * @file Type Definitions - Sift
 * @module tutils/types/Sift
 */

import type EmptyArray from './empty-array'
import type Falsy from './falsy'
import type IfNever from './if-never'
import type IfTuple from './if-tuple'
import type IsAnyOrNever from './is-any-or-never'
import type Nilable from './nilable'
import type Subtract from './subtract'
import type Writable from './writable'

/**
 * Construct a tuple by spreading each array in `M`.
 *
 * @internal
 *
 * @template M - Tuple elements map
 * @template I - Current index
 * @template Acc - Tuple elements accumulator
 */
type BuildTuple<
  M extends unknown[][],
  I extends number = M['length'],
  Acc extends readonly unknown[] = EmptyArray
> = I extends 0
  ? Acc
  : Subtract<I, 1> extends infer N extends number
  ? BuildTuple<M, N, [...M[N], ...Acc]>
  : never

/**
 * Removes {@linkcode Falsy} values from `T`.
 *
 * @example
 *  type X = Sift<readonly [EmptyString, 0, 0n, false, null, undefined]>
 *  // []
 * @example
 *  type X = Sift<readonly [Nilable<string>, 0, boolean?]>
 *  // [string, true]
 * @example
 *  type X = Sift<Nilable<string>[]>
 *  // string[]
 * @example
 *  type X = Sift<any>
 *  // []
 * @example
 *  type X = Sift<never>
 *  // []
 *
 * @template T - Array to filter
 */
type Sift<T extends Nilable<readonly unknown[]>> = IsAnyOrNever<T> extends true
  ? EmptyArray
  : T extends readonly unknown[]
  ? Writable<{
      [K in keyof T]-?: Exclude<T[K], Falsy> extends infer V
        ? IfTuple<T, IfNever<V, EmptyArray, [V]>, V>
        : never
    }> extends infer U
    ? U extends unknown[][]
      ? BuildTuple<U>
      : U
    : never
  : EmptyArray

export type { Sift as default }
