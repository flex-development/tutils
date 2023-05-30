/**
 * @file Type Definitions - IfObject
 * @module tutils/types/IfObject
 */

import type IsObject from './is-object'

/**
 * Returns a type that indicates if `T` is an `object`.
 *
 * @see {@linkcode IsObject}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is an `object`
 * @template False - Type if `T` is not an `object`
 */
type IfObject<T, True, False> = IsObject<T> extends true ? True : False

export type { IfObject as default }
