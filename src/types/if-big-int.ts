/**
 * @file Type Definitions - IfBigInt
 * @module tutils/types/IfBigInt
 */

import type IfNever from './if-never'
import type IsBigInt from './is-big-int'

/**
 * Returns a type that indicates if `U` extends `bigint`.
 *
 * @see {@linkcode IsBigInt}
 *
 * @example
 *  type X = IfBigInt<3n, 1, 0>
 *  // 1
 * @example
 *  type X = IfBigInt<bigint, 1, 0>
 *  // 1
 * @example
 *  type X = IfBigInt<3, 1, 0>
 *  // 0
 * @example
 *  type X = IfBigInt<number, 1, 0>
 *  // 0
 * @example
 *  type X = IfBigInt<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfBigInt<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfBigInt<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `bigint`
 * @template F - Type if `U` does not extend `bigint`
 */
type IfBigInt<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsBigInt<U> extends true ? T : F) : F
>

export type { IfBigInt as default }
