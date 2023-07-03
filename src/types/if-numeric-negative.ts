/**
 * @file Type Definitions - IfNegativeNumeric
 * @module tutils/types/IfNegativeNumeric
 */

import type IfNever from './if-never'
import type IsNegativeNumeric from './is-numeric-negative'

/**
 * Returns a type that indicates if `U` extends `NegativeNumeric`.
 *
 * @see {@linkcode IsNegativeNumeric}
 *
 * @example
 *  type X = IfNumeric<'-13', 1, 0>
 *  // 1
 * @example
 *  type X = IfNegativeNumeric<NegativeNumeric, 1, 0>
 *  // 1
 * @example
 *  type X = IfNegativeNumeric<NumberLike, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfNegativeNumeric<'13', 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeNumeric<Numeric, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeNumeric<number, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeNumeric<string, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeNumeric<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeNumeric<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeNumeric<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `NegativeNumeric`
 * @template F - Type if `U` does not extend `NegativeNumeric`
 */
type IfNegativeNumeric<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsNegativeNumeric<U> extends true ? T : F) : F
>

export type { IfNegativeNumeric as default }
