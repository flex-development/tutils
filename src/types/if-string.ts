/**
 * @file Type Definitions - IfString
 * @module tutils/types/IfString
 */

import type IsString from './is-string'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `string`.
 *
 * @see {@linkcode IsString}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `string`
 * @template False - Type if `T` does not extend `string`
 */
type IfString<T, True, False> = IsString<T> extends true ? True : False

export type { IfString as default }
