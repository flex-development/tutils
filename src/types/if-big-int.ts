/**
 * @file Type Definitions - IfBigInt
 * @module tutils/types/IfBigInt
 */

import type IsBigInt from './is-big-int'

/**
 * Returns a type that indicates if `T` is a `bigint`.
 *
 * @see {@linkcode IsBigInt}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a `bigint`
 * @template False - Type if `T` is not a `bigint`
 */
type IfBigInt<T, True, False> = IsBigInt<T> extends true ? True : False

export type { IfBigInt as default }
