/**
 * @file Type Definitions - IfSymbol
 * @module tutils/types/IfSymbol
 */

import type IfNever from './if-never'
import type IsSymbol from './is-symbol'

/**
 * Returns a type that indicates if `U` extends `symbol`.
 *
 * @see {@linkcode IsSymbol}
 *
 * @example
 *  type X = IfSymbol<symbol, 1, 0>
 *  // 1
 * @example
 *  type X = IfSymbol<keyof EmptyObject, 1, 0>
 *  // 1
 * @example
 *  type X = IfSymbol<keyof string, 1, 0>
 *  // 0 | 1
 * @example
 *  type X = IfSymbol<string, 1, 0>
 *  // 0
 * @example
 *  type X = IfSymbol<any, 1, 0>
 *  // 0
 * @example
 *  type X = IfSymbol<never, 1, 0>
 *  // 0
 * @example
 *  type X = IfSymbol<unknown, 1, 0>
 *  // 0
 *
 * @template U - Type to evaluate
 * @template T - Type if `U` extends `symbol`
 * @template F - Type if `U` does not extend `symbol`
 */
type IfSymbol<U, T, F> = IfNever<
  U,
  F,
  U extends unknown ? (IsSymbol<U> extends true ? T : F) : F
>

export type { IfSymbol as default }
