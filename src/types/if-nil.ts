/**
 * @file Type Definitions - IfNil
 * @module tutils/types/IfNil
 */

import type IfNever from './if-never'
import type IsNil from './is-nil'

/**
 * Returns a type that indicates if `U` extends `NIL`.
 *
 * @see {@linkcode IsNil}
 *
 * @example
 *  type X = IfNil<NIL, 1, 0>
 *  // 1
 * @example
 *  type X = IfNil<null, 1, 0>
 *  // 1
 * @example
 *  type X = IfNil<undefined, 1, 0>
 *  // 1
 * @example
 *  type X = IfNil<Falsy, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfNil<string, 1, 0>
 *  // 0
 * @example
 *  type X = IfNil<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfNil<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfNil<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `NIL`
 * @template F - Type if `U` does not extend `NIL`
 */
type IfNil<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsNil<U> extends true ? T : F) : F
>

export type { IfNil as default }
