/**
 * @file Type Definitions - IfTrue
 * @module tutils/types/IfTrue
 */

import type IfNever from './if-never'
import type IsTrue from './is-true'

/**
 * Returns a type that indicates if `U` extends `true`.
 *
 * @see {@linkcode IsTrue}
 *
 * @example
 *  type X = IfTrue<true, 1, 0>
 *  // 1
 * @example
 *  type X = IfTrue<Booleanish, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfTrue<false, 1, 0>
 *  // 0
 * @example
 *  type X = IfTrue<1, 1, 0>
 *  // 0
 * @example
 *  type X = IfTrue<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfTrue<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfTrue<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `true`
 * @template F - Type if `U` does not extend `true`
 */
type IfTrue<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsTrue<U> extends true ? T : F) : F
>

export type { IfTrue as default }
