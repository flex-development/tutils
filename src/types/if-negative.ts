/**
 * @file Type Definitions - IfNegative
 * @module tutils/types/IfNegative
 */

import type IfNever from './if-never'
import type IsNegative from './is-negative'

/**
 * Returns a type that indicates if `U` extends a negative value.
 *
 * Negative values include:
 *
 * - `NegativeNumeric`
 * - A negative `bigint` (e.g. `-1n`)
 * - A negative `number` (e.g. `-1`)
 *
 * @see {@linkcode IsNegative}
 *
 * @example
 *  type X = IfNegative<-13, 1, 0>
 *  // 1
 * @example
 *  type X = IfNegative<-13n, 1, 0>
 *  // 1
 * @example
 *  type X = IfNegative<'-13', 1, 0>
 *  // 1
 * @example
 *  type X = IfNegative<NegativeNumeric, 1, 0>
 *  // 1
 * @example
 *  type X = IfNegative<CompareResult, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfNegative<bigint, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegative<number, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegative<string, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegative<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegative<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegative<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends a negative value
 * @template F - Type if `U` does not extend a negative value
 */
type IfNegative<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsNegative<U> extends true ? T : F) : F
>

export type { IfNegative as default }
