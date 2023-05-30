/**
 * @file Type Definitions - IfPrimitive
 * @module tutils/types/IfPrimitive
 */

import type IsPrimitive from './is-primitive'

/**
 * Returns a type that indicates if `T` is a `Primitive`.
 *
 * @see {@linkcode IsPrimitive}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a `Primitive`
 * @template False - Type if `T` is not a `Primitive`
 */
type IfPrimitive<T, True, False> = IsPrimitive<T> extends true ? True : False

export type { IfPrimitive as default }
