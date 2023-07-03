/**
 * @file Type Definitions - IfBoolean
 * @module tutils/types/IfBoolean
 */

import type IfNever from './if-never'
import type IsBoolean from './is-boolean'

/**
 * Returns a type that indicates if `U` extends `boolean`.
 *
 * @see {@linkcode IsBoolean}
 *
 * @example
 *  type X = IfBoolean<boolean, 1, 0>
 *  // 1
 * @example
 *  type X = IfBoolean<false, 1, 0>
 *  // 1
 * @example
 *  type X = IfBoolean<true, 1, 0>
 *  // 1
 * @example
 *  type X = IfBoolean<Booleanish, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfBoolean<1, 1, 0>
 *  // 0
 * @example
 *  type X = IfBoolean<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfBoolean<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfBoolean<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `boolean`
 * @template F - Type if `U` does not extend `boolean`
 */
type IfBoolean<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsBoolean<U> extends true ? T : F) : F
>

export type { IfBoolean as default }
