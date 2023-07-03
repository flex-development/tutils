/**
 * @file Type Definitions - IfPrimitive
 * @module tutils/types/IfPrimitive
 */

import type IfNever from './if-never'
import type IsPrimitive from './is-primitive'

/**
 * Returns a type that indicates if `U` extends `Primitive`.
 *
 * @see {@linkcode IsPrimitive}
 *
 * @example
 *  type X = IfPrimitive<bigint, 1, 0>
 *  // 1
 * @example
 *  type X = IfPrimitive<boolean, 1, 0>
 *  // 1
 * @example
 *  type X = IfPrimitive<null, 1, 0>
 *  // 1
 * @example
 *  type X = IfPrimitive<number, 1, 0>
 *  // 1
 * @example
 *  type X = IfPrimitive<string, 1, 0>
 *  // 1
 * @example
 *  type X = IfPrimitive<symbol, 1, 0>
 *  // 1
 * @example
 *  type X = IfPrimitive<undefined, 1, 0>
 *  // 1
 * @example
 *  type X = IfPrimitive<OneOrMany<string>, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfPrimitive<{ hello: string; world: string }, 1, 0>
 *  // 0
 * @example
 *  type X = IfPrimitive<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfPrimitive<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfPrimitive<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `Primitive`
 * @template F - Type if `U` does not extend `Primitive`
 */
type IfPrimitive<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsPrimitive<U> extends true ? T : F) : F
>

export type { IfPrimitive as default }
