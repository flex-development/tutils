/**
 * @file Type Definitions - IfJsonPrimitive
 * @module tutils/types/IfJsonPrimitive
 */

import type IfNever from './if-never'
import type IsJsonPrimitive from './is-json-primitive'

/**
 * Returns a type that indicates if `U` extends `JsonPrimitive`.
 *
 * @see {@linkcode IsJsonPrimitive}
 *
 * @example
 *  type X = IfJsonPrimitive<boolean, 1, 0>
 *  // 1
 * @example
 *  type X = IfJsonPrimitive<null, 1, 0>
 *  // 1
 * @example
 *  type X = IfJsonPrimitive<number, 1, 0>
 *  // 1
 * @example
 *  type X = IfJsonPrimitive<string, 1, 0>
 *  // 1
 * @example
 *  type X = IfJsonPrimitive<Primitive, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfJsonPrimitive<{ hello: string; world: string }, 1, 0>
 *  // 0
 * @example
 *  type X = IfJsonPrimitive<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfJsonPrimitive<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfJsonPrimitive<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `JsonPrimitive`
 * @template F - Type if `U` does not extend `JsonPrimitive`
 */
type IfJsonPrimitive<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsJsonPrimitive<U> extends true ? T : F) : F
>

export type { IfJsonPrimitive as default }
