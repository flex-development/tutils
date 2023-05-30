/**
 * @file Type Definitions - IfUnknown
 * @module tutils/types/IfUnknown
 */

import type IsUnknown from './is-unknown'

/**
 * Returns a type that indicates if `T` is `unknown`.
 *
 * @see {@linkcode IsUnknown}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `unknown`
 * @template False - Type if `T` is not `unknown`
 */
type IfUnknown<T, True, False> = IsUnknown<T> extends true ? True : False

export type { IfUnknown as default }
