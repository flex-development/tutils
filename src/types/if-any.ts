/**
 * @file Type Definitions - IfAny
 * @module tutils/types/IfAny
 */

import type IsAny from './is-any'

/**
 * Conditional type that resolves depending on whether or not `T` is type `any`.
 *
 * @see {@linkcode IsAny}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is type `any`
 * @template False - Type if `T` is not type `any`
 */
type IfAny<T, True, False> = IsAny<T> extends true ? True : False

export type { IfAny as default }
