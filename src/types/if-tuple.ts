/**
 * @file Type Definitions - IfTuple
 * @module tutils/types/IfTuple
 */

import type IfNever from './if-never'
import type IsTuple from './is-tuple'

/**
 * Returns a type that indicates if `U` extends a [tuple][1].
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @see {@linkcode IsTuple}
 *
 * @example
 *  type X = IfTuple<readonly [number, string?], 1, 0>
 *  // 1
 * @example
 *  type X = IfTuple<EmptyArray, 1, 0>
 *  // 1
 * @example
 *  type X = IfTuple<EmptyArray | Nilable<string>[], 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfTuple<Optional<number | string>[], 1, 0>
 *  // 0
 * @example
 *  type X = IfTuple<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfTuple<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfTuple<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends a tuple
 * @template F - Type if `U` does not extend a tuple
 */
type IfTuple<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsTuple<U> extends true ? T : F) : F
>

export type { IfTuple as default }
