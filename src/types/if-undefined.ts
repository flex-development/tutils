/**
 * @file Type Definitions - IfUndefined
 * @module tutils/types/IfUndefined
 */

import type IsUndefined from './is-undefined'

/**
 * Returns a type that indicates if `T` is `undefined`.
 *
 * @see {@linkcode IsUndefined}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `undefined`
 * @template False - Type if `T` is not `undefined`
 */
type IfUndefined<T, True, False> = IsUndefined<T> extends true ? True : False

export type { IfUndefined as default }
