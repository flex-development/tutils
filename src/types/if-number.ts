/**
 * @file Type Definitions - IfNumber
 * @module tutils/types/IfNumber
 */

import type IfNever from './if-never'
import type IsNumber from './is-number'

/**
 * Returns a type that indicates if `U` extends `number`.
 *
 * @see {@linkcode IsNumber}
 *
 * @example
 *  type X = IfNumber<3, 1, 0>
 *  // 1
 * @example
 *  type X = IfNumber<number, 1, 0>
 *  // 1
 * @example
 *  type X = IfNumber<3n, 1, 0>
 *  // 0
 * @example
 *  type X = IfNumber<bigint, 1, 0>
 *  // 0
 * @example
 *  type X = IfNumber<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfNumber<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfNumber<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `number`
 * @template F - Type if `U` does not extend `number`
 */
type IfNumber<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsNumber<U> extends true ? T : F) : F
>

export type { IfNumber as default }
