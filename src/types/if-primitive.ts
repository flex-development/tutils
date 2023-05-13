/**
 * @file Type Definitions - IfPrimitive
 * @module tutils/types/IfPrimitive
 */

import type IsPrimitive from './is-primitive'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `Primitive`.
 *
 * @see {@linkcode IsPrimitive}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `Primitive`
 * @template False - Type if `T` does not extend `Primitive`
 */
type IfPrimitive<T, True, False> = IsPrimitive<T> extends true ? True : False

export type { IfPrimitive as default }
