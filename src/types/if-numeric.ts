/**
 * @file Type Definitions - IfNumeric
 * @module tutils/types/IfNumeric
 */

import type IfNever from './if-never'
import type IsNumeric from './is-numeric'

/**
 * Returns a type that indicates if `U` extends `NegativeNumeric` or `Numeric`.
 *
 * @see {@linkcode IsNumeric}
 *
 * @example
 *  type X = IfNumeric<'-13', 1, 0>
 *  // 1
 * @example
 *  type X = IfNumeric<'13', 1, 0>
 *  // 1
 * @example
 *  type X = IfNumeric<NegativeNumeric, 1, 0>
 *  // 1
 * @example
 *  type X = IfNumeric<Numeric, 1, 0>
 *  // 1
 * @example
 *  type X = IfNumeric<NumberLike, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfNumeric<number, 1, 0>
 *  // 0
 * @example
 *  type X = IfNumeric<string, 1, 0>
 *  // 0
 * @example
 *  type X = IfNumeric<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfNumeric<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfNumeric<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `NegativeNumeric` or `Numeric`
 * @template F - Type if `U` does not extend `NegativeNumeric` or `Numeric`
 */
type IfNumeric<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsNumeric<U> extends true ? T : F) : F
>

export type { IfNumeric as default }
