/**
 * @file Type Definitions - IfAny
 * @module tutils/types/IfAny
 */

import type IsAny from './is-any'

/**
 * Returns a type that indicates if `U` is `any`.
 *
 * @see {@linkcode IsAny}
 *
 * @example
 *  type X = IfAny<any, 1, 0>
 *  // 1
 * @example
 *  type X = IfAny<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfAny<unknown, 1, 0>
 *  // 0
 * @example
 *  type X = IfAny<{ hello: string; world: string }, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` is `any`
 * @template F - Type if `U` is not `any`
 */
type IfAny<U, T, F> = IsAny<U> extends true ? T : F

export type { IfAny as default }
