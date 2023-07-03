/**
 * @file Type Definitions - IfFalse
 * @module tutils/types/IfFalse
 */

import type IfNever from './if-never'
import type IsFalse from './is-false'

/**
 * Returns a type that indicates if `U` extends `false`.
 *
 * @see {@linkcode IsFalse}
 *
 * @example
 *  type X = IfFalse<false, 1, 0>
 *  // 1
 * @example
 *  type X = IfFalse<Booleanish, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfFalse<true, 1, 0>
 *  // 0
 * @example
 *  type X = IfFalse<0, 1, 0>
 *  // 0
 * @example
 *  type X = IfFalse<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfFalse<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfFalse<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `false`
 * @template F - Type if `U` does not extend `false`
 */
type IfFalse<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsFalse<U> extends true ? T : F) : F
>

export type { IfFalse as default }
