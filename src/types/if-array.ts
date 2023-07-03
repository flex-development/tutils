/**
 * @file Type Definitions - IfArray
 * @module tutils/types/IfArray
 */

import type IfNever from './if-never'
import type IsArray from './is-array'

/**
 * Returns a type that indicates if `U` extends an array of type `V`.
 *
 * @see {@linkcode IsArray}
 *
 * @example
 *  type X = IfArray<readonly [number, string], unknown, 1, 0>
 *  // 1
 * @example
 *  type X = IfArray<readonly [number, string], NumberString, 1, 0>
 *  // 1
 * @example
 *  type X = IfArray<readonly [number, string], number, 1, 0>
 *  // 0
 * @example
 *  type X = IfArray<NumberString[], NumberString, 1, 0>
 *  // 1
 * @example
 *  type X = IfArray<number[], number, 1, 0>
 *  // 1
 * @example
 *  type X = IfArray<number[], string, 1, 0>
 *  // 0
 * @example
 *  type X = IfArray<any, unknown, 1, 0>
 *  // 0
 * @example
 *  type X = IfArray<never, unknown, 1, 0>
 *  // 0
 * @example
 *  type X = IfArray<unknown,unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template V - Array element type
 * @template T - Type if `U` extends array of type `V`
 * @template F - Type if `U` does not extends array of type `V`
 */
type IfArray<U, V, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsArray<U, V> extends true ? T : F) : F
>

export type { IfArray as default }
