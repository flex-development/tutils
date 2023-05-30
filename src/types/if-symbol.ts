/**
 * @file Type Definitions - IfSymbol
 * @module tutils/types/IfSymbol
 */

import type IsSymbol from './is-symbol'

/**
 * Returns a type that indicates if `T` is a `symbol`.
 *
 * @see {@linkcode IsSymbol}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a `symbol`
 * @template False - Type if `T` is not a `symbol`
 */
type IfSymbol<T, True, False> = IsSymbol<T> extends true ? True : False

export type { IfSymbol as default }
