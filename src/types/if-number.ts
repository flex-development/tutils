/**
 * @file Type Definitions - IfNumber
 * @module tutils/types/IfNumber
 */

import type IsNumber from './is-number'

/**
 * Returns a type that indicates if `T` is a `number`.
 *
 * @see {@linkcode IsNumber}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a `number`
 * @template False - Type if `T` is not a `number`
 */
type IfNumber<T, True, False> = IsNumber<T> extends true ? True : False

export type { IfNumber as default }
