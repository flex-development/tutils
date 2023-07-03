/**
 * @file Type Definitions - IfInteger
 * @module tutils/types/IfInteger
 */

import type IfNever from './if-never'
import type IsInteger from './is-integer'

/**
 * Returns a type that indicates if `U` extends an integer.
 *
 * @see {@linkcode IsInteger}
 *
 * @example
 *  type X = IfInteger<-1, 1, 0>
 *  // 1
 * @example
 *  type X = IfInteger<0, 1, 0>
 *  // 1
 * @example
 *  type X = IfInteger<1, 1, 0>
 *  // 1
 * @example
 *  type X = IfInteger<Booleanish, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfInteger<number, 1, 0>
 *  // 0
 * @example
 *  type X = IfInteger<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfInteger<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfInteger<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends an integer
 * @template False - Type if `U` does not extend an integer
 */
type IfInteger<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsInteger<U> extends true ? T : F) : F
>

export type { IfInteger as default }
