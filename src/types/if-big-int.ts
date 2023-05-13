/**
 * @file Type Definitions - IfBigInt
 * @module tutils/types/IfBigInt
 */

import type IsBigInt from './is-big-int'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `bigint`.
 *
 * @see {@linkcode IsBigInt}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `bigint`
 * @template False - Type if `T` does not extend `bigint`
 */
type IfBigInt<T, True, False> = IsBigInt<T> extends true ? True : False

export type { IfBigInt as default }
