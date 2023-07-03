/**
 * @file Type Definitions - IfFunction
 * @module tutils/types/IfFunction
 */

import type IfNever from './if-never'
import type IsFunction from './is-function'

/**
 * Returns a type that indicates if `U` extends `Fn`.
 *
 * @see {@linkcode IsFunction}
 *
 * @example
 *  type X = IfFunction<(n: number) => string, 1, 0>
 *  // 1
 * @example
 *  type X = IfFunction<Fn, 1, 0>
 *  // 1
 * @example
 *  type X = IfFunction<Readonly<Fn>, 1, 0>
 *  // 1
 * @example
 *  type X = IfFunction<Optional<(n: number) => string>, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfFunction<undefined, 1, 0>
 *  // 0
 * @example
 *  type X = IfFunction<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfFunction<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfFunction<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `Function`
 * @template F - Type if `U` does not extend `Function`
 */
type IfFunction<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsFunction<U> extends true ? T : F) : F
>

export type { IfFunction as default }
