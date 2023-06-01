/**
 * @file Type Definitions - IfFalse
 * @module tutils/types/IfFalse
 */

import type IsFalse from './is-false'

/**
 * Returns a type that indicates if `T` is `false`.
 *
 * @see {@linkcode IsFalse}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `false`
 * @template False - Type if `T` is not `false`
 */
type IfFalse<T, True, False> = IsFalse<T> extends true ? True : False

export type { IfFalse as default }
