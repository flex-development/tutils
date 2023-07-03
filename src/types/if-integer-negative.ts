/**
 * @file Type Definitions - IfNegativeInteger
 * @module tutils/types/IfNegativeInteger
 */

import type IfNever from './if-never'
import type IsNegativeInteger from './is-integer-negative'

/**
 * Returns a type that indicates if `U` extends a negative integer.
 *
 * @see {@linkcode IsNegativeInteger}
 *
 * @example
 *  type X = IfNegativeInteger<-1, 1, 0>
 *  // 1
 * @example
 *  type X = IfNegativeInteger<CompareResult, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfNegativeInteger<0, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeInteger<1, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeInteger<number, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeInteger<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeInteger<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfNegativeInteger<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends a negative integer
 * @template F - Type if `U` does not extend a negative integer
 */
type IfNegativeInteger<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsNegativeInteger<U> extends true ? T : F) : F
>

export type { IfNegativeInteger as default }
