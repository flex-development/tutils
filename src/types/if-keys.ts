/**
 * @file Type Definitions - IfKeys
 * @module tutils/types/IfKeys
 */

import type HasKeys from './has-keys'
import type IfNever from './if-never'

/**
 * Returns a type that indicates if `U` has any keys.
 *
 * @see {@linkcode HasKeys}
 *
 * @example
 *  type X = IfKeys<{ hello: string; world: string }, 1, 0>
 *  // 1
 * @example
 *  type X = IfKeys<readonly ['a', 'b', 'c'?], 1, 0>
 *  // 1
 * @example
 *  type X = IfKeys<number, 1, 0>
 *  // 1
 * @example
 *  type X = IfKeys<{}, 1, 0>
 *  // 0
 * @example
 *  type X = IfKeys<EmptyObject, 1, 0>
 *  // 0
 * @example
 *  type X = IfKeys<any, 1, 0>
 *  // 1
 * @example
 *  type X = IfKeys<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfKeys<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` has keys
 * @template F - Type if `U` does not have any keys
 */
type IfKeys<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (HasKeys<U> extends true ? T : F) : F
>

export type { IfKeys as default }
