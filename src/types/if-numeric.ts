/**
 * @file Type Definitions - IfNumeric
 * @module tutils/types/IfNumeric
 */

import type IsNumeric from './is-numeric'

/**
 * Returns a type that indicates if `T` is a `Numeric`.
 *
 * @see {@linkcode IsNumeric}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a `Numeric`
 * @template False - Type if `T` is not a `Numeric`
 */
type IfNumeric<T, True, False> = IsNumeric<T> extends true ? True : False

export type { IfNumeric as default }
