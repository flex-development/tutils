/**
 * @file Type Definitions - IfObjectCurly
 * @module tutils/types/IfObjectCurly
 */

import type IfNever from './if-never'
import type IsObjectCurly from './is-object-curly'

/**
 * Returns a type that indicates if `U` extends `ObjectCurly`.
 *
 * @see {@linkcode IsObjectCurly}
 *
 * @example
 *  type X = IfObjectCurly<{ hello: string; world: string }, 1, 0>
 *  // 1
 * @example
 *  type X = IfObjectCurly<Nilable<{ hello: string; world: string }>, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfObjectCurly<(n: number) => string, 1, 0>
 *  // 0
 * @example
 *  type X = IfObjectCurly<readonly [number, string], 1, 0>
 *  // 0
 * @example
 *  type X = IfObjectCurly<string, 1, 0>
 *  // 0
 * @example
 *  type X = IfObjectCurly<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfObjectCurly<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfObjectCurly<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `ObjectCurly`
 * @template F - Type if `U` does not extend `ObjectCurly`
 */
type IfObjectCurly<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsObjectCurly<U> extends true ? T : F) : F
>

export type { IfObjectCurly as default }
