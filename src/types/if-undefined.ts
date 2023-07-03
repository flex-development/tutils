/**
 * @file Type Definitions - IfUndefined
 * @module tutils/types/IfUndefined
 */

import type IfNever from './if-never'
import type IsUndefined from './is-undefined'

/**
 * Returns a type that indicates if `U` extends `undefined`.
 *
 * @see {@linkcode IsUndefined}
 *
 * @example
 *  type X = IfUndefined<undefined, 1, 0>
 *  // 1
 * @example
 *  type X = IfUndefined<NIL, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfUndefined<null, 1, 0>
 *  // 0
 * @example
 *  type X = IfUndefined<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfUndefined<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfUndefined<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `undefined`
 * @template F - Type if `U` does not extend `undefined`
 */
type IfUndefined<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsUndefined<U> extends true ? T : F) : F
>

export type { IfUndefined as default }
