/**
 * @file Type Definitions - IfUnknown
 * @module tutils/types/IfUnknown
 */

import type IsUnknown from './is-unknown'

/**
 * Returns a type that indicates if `U` is `unknown`.
 *
 * @see {@linkcode IsUnknown}
 *
 * @example
 *  type X = IfUnknown<unknown, 1, 0>
 *  // 1
 * @example
 *  type X = IfUnknown<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfUnknown<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfUnknown<{ hello: string; world: string }, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` is `unknown`
 * @template F - Type if `U` is not `unknown`
 */
type IfUnknown<U, T, F> = IsUnknown<U> extends true ? T : F

export type { IfUnknown as default }
