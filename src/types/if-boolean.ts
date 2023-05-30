/**
 * @file Type Definitions - IfBoolean
 * @module tutils/types/IfBoolean
 */

import type IsBoolean from './is-boolean'

/**
 * Returns a type that indicates if `T` is a `boolean`.
 *
 * @see {@linkcode IsBoolean}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a `boolean`
 * @template False - Type if `T` is not a `boolean`
 */
type IfBoolean<T, True, False> = IsBoolean<T> extends true ? True : False

export type { IfBoolean as default }
