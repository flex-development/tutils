/**
 * @file Type Definitions - IfAnyOrNever
 * @module tutils/types/IfAnyOrNever
 */

import type IsAnyOrNever from './is-any-or-never'

/**
 * Returns a type that indicates if `U` is `any` or `never`.
 *
 * @see {@linkcode IsAnyOrNever}
 *
 * @example
 *  type X = IfAnyOrNever<any, 1, 0>
 *  // 1
 * @example
 *  type X = IfAnyOrNever<never, 1, 0>
 *  // 1
 * @example
 *  type X = IfAnyOrNever<unknown, 1, 0>
 *  // 0
 * @example
 *  type X = IfAnyOrNever<{ hello: string; world: string }, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` is `any` or `never`
 * @template F - Type if `U` is not `any` or `never`
 */
type IfAnyOrNever<U, T, F> = IsAnyOrNever<U> extends true ? T : F

export type { IfAnyOrNever as default }
