/**
 * @file Type Definitions - IfFunction
 * @module tutils/types/IfFunction
 */

import type IsFunction from './is-function'

/**
 * Returns a type that indicates if `T` is a function.
 *
 * @see {@linkcode IsFunction}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a function
 * @template False - Type if `T` is not a function
 */
type IfFunction<T, True, False> = IsFunction<T> extends true ? True : False

export type { IfFunction as default }
