/**
 * @file Type Definitions - IfArray
 * @module tutils/types/IfArray
 */

import type IsArray from './is-array'

/**
 * Returns a type that indicates if `T` is an array of type `V`.
 *
 * @see {@linkcode IsArray}
 *
 * @template T - Type to evaluate
 * @template V - Array element type
 * @template True - Type if `T` is array of type `V`
 * @template False - Type if `T` is not array of type `V`
 */
type IfArray<T, V, True, False> = IsArray<T, V> extends true ? True : False

export type { IfArray as default }
