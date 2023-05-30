/**
 * @file Type Definitions - IfAny
 * @module tutils/types/IfAny
 */

import type IsAny from './is-any'

/**
 * Returns a type that indicates if `T` is `any`.
 *
 * @see {@linkcode IsAny}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is `any`
 * @template False - Type if `T` is not `any`
 */
type IfAny<T, True, False> = IsAny<T> extends true ? True : False

export type { IfAny as default }
