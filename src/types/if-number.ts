/**
 * @file Type Definitions - IfNumber
 * @module tutils/types/IfNumber
 */

import type IsNumber from './is-number'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `number`.
 *
 * @see {@linkcode IsNumber}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `number`
 * @template False - Type if `T` does not extend `number`
 */
type IfNumber<T, True, False> = IsNumber<T> extends true ? True : False

export type { IfNumber as default }
