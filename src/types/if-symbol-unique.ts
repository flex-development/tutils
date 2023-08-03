/**
 * @file Type Definitions - IfUniqueSymbol
 * @module tutils/types/IfUniqueSymbol
 */

import type IfNever from './if-never'
import type IsUniqueSymbol from './is-symbol-unique'

/**
 * Returns a type that indicates if `U` is a type of `unique symbol`.
 *
 * @see {@linkcode IsUniqueSymbol}
 *
 * @example
 *  type X = IfUniqueSymbol<keyof EmptyObject, 1, 0>
 *  // 1
 * @example
 *  type X = IfUniqueSymbol<keyof Integer, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfUniqueSymbol<symbol, 1, 0>
 *  // 0
 * @example
 *  type X = IfUniqueSymbol<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfUniqueSymbol<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfUniqueSymbol<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` is `unique symbol`
 * @template F - Type if `U` is not a `unique symbol`
 */
type IfUniqueSymbol<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsUniqueSymbol<U> extends true ? T : F) : F
>

export type { IfUniqueSymbol as default }
