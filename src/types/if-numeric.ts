/**
 * @file Type Definitions - IfNumeric
 * @module tutils/types/IfNumeric
 */

import type IsNumeric from './is-numeric'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `Numeric`.
 *
 * @see {@linkcode IsNumeric}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `Numeric`
 * @template False - Type if `T` does not extend `Numeric`
 */
type IfNumeric<T, True, False> = IsNumeric<T> extends true ? True : False

export type { IfNumeric as default }
