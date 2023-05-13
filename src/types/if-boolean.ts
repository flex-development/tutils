/**
 * @file Type Definitions - IfBoolean
 * @module tutils/types/IfBoolean
 */

import type IsBoolean from './is-boolean'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `boolean`.
 *
 * @see {@linkcode IsBoolean}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `boolean`
 * @template False - Type if `T` does not extend `boolean`
 */
type IfBoolean<T, True, False> = IsBoolean<T> extends true ? True : False

export type { IfBoolean as default }
