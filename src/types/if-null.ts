/**
 * @file Type Definitions - IfNull
 * @module tutils/types/IfNull
 */

import type IsNull from './is-null'

/**
 * Returns a type that indicates if `T` is `null`.
 *
 * @see {@linkcode IsNull}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `null`
 * @template False - Type if `T` is not `null`
 */
type IfNull<T, True, False> = IsNull<T> extends true ? True : False

export type { IfNull as default }
