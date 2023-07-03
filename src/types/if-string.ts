/**
 * @file Type Definitions - IfString
 * @module tutils/types/IfString
 */

import type IfNever from './if-never'
import type IsString from './is-string'

/**
 * Returns a type that indicates if `U` extends `string`.
 *
 * @see {@linkcode IsString}
 *
 * @example
 *  type X = IfString<'hello', 1, 0>
 *  // 1
 * @example
 *  type X = IfString<string, 1, 0>
 *  // 1
 * @example
 *  type X = IfString<number, 1, 0>
 *  // 0
 * @example
 *  type X = IfString<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfString<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfString<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `string`
 * @template F - Type if `U` does not extend `string`
 */
type IfString<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsString<U> extends true ? T : F) : F
>

export type { IfString as default }
