/**
 * @file Type Definitions - IfNever
 * @module tutils/types/IfNever
 */

import type IsNever from './is-never'

/**
 * Returns a type that indicates if `T` is `never`.
 *
 * @see {@linkcode IsNever}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `never`
 * @template False - Type if `T` is not `never`
 */
type IfNever<T, True, False> = IsNever<T> extends true ? True : False

export type { IfNever as default }
