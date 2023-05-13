/**
 * @file Type Definitions - IfNull
 * @module tutils/types/IfNull
 */

import type IsNull from './is-null'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `null`.
 *
 * @see {@linkcode IsNull}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `null`
 * @template False - Type if `T` does not extend `null`
 */
type IfNull<T, True, False> = IsNull<T> extends true ? True : False

export type { IfNull as default }
