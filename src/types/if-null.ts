/**
 * @file Type Definitions - IfNull
 * @module tutils/types/IfNull
 */

import type IfNever from './if-never'
import type IsNull from './is-null'

/**
 * Returns a type that indicates if `U` extends `null`.
 *
 * @see {@linkcode IsNull}
 *
 * @example
 *  type X = IfNull<null, 1, 0>
 *  // 1
 * @example
 *  type X = IfNull<NIL, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfNull<undefined, 1, 0>
 *  // 0
 * @example
 *  type X = IfNull<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfNull<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfNull<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `null`
 * @template F - Type if `U` does not extend `null`
 */
type IfNull<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsNull<U> extends true ? T : F) : F
>

export type { IfNull as default }
