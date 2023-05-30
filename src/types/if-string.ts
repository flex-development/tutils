/**
 * @file Type Definitions - IfString
 * @module tutils/types/IfString
 */

import type IsString from './is-string'

/**
 * Returns a type that indicates if `T` is a `string`.
 *
 * @see {@linkcode IsString}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a `string`
 * @template False - Type if `T` is not a `string`
 */
type IfString<T, True, False> = IsString<T> extends true ? True : False

export type { IfString as default }
