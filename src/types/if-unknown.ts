/**
 * @file Type Definitions - IfUnknown
 * @module tutils/types/IfUnknown
 */

import type IsUnknown from './is-unknown'

/**
 * Conditional type that resolves depending on whether or not `T` is type
 * `unknown`.
 *
 * @see {@linkcode IsUnknown}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is type `unknown`
 * @template False - Type if `T` is not type `unknown`
 */
type IfUnknown<T, True, False> = IsUnknown<T> extends true ? True : False

export type { IfUnknown as default }
