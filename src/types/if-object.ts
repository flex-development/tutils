/**
 * @file Type Definitions - IfObject
 * @module tutils/types/IfObject
 */

import type IfNever from './if-never'
import type IsObject from './is-object'

/**
 * Returns a type that indicates if `U` extends `object`.
 *
 * @see {@linkcode IsObject}
 *
 * @example
 *  type X = IfObject<{ hello: string; world: string }, 1, 0>
 *  // 1
 * @example
 *  type X = IfObject<(n: number) => string, 1, 0>
 *  // 1
 * @example
 *  type X = IfObject<readonly [number, string], 1, 0>
 *  // 1
 * @example
 *  type X = IfObject<OneOrMany<string>, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfObject<string, 1, 0>
 *  // 0
 * @example
 *  type X = IfObject<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfObject<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfObject<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `object`
 * @template F - Type if `U` does not extend `object`
 */
type IfObject<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsObject<U> extends true ? T : F) : F
>

export type { IfObject as default }
