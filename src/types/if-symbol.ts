/**
 * @file Type Definitions - IfSymbol
 * @module tutils/types/IfSymbol
 */

import type IsSymbol from './is-symbol'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `symbol`.
 *
 * @see {@linkcode IsSymbol}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `symbol`
 * @template False - Type if `T` does not extend `symbol`
 */
type IfSymbol<T, True, False> = IsSymbol<T> extends true ? True : False

export type { IfSymbol as default }
