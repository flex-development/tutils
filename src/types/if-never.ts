/**
 * @file Type Definitions - IfNever
 * @module tutils/types/IfNever
 */

import type IsNever from './is-never'

/**
 * Returns a type that indicates if `U` is `never`.
 *
 * @see {@linkcode IsNever}
 *
 * @example
 *  type X = IfNever<never, 1, 0>
 *  // 1
 * @example
 *  type X = IfNever<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfNever<unknown, 1, 0>
 *  // 0
 * @example
 *  type X = IfNever<{ hello: string; world: string }, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` is `never`
 * @template F - Type if `U` is not `never`
 */
type IfNever<U, T, F> = IsNever<U> extends true ? T : F

export type { IfNever as default }
