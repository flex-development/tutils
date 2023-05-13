/**
 * @file Type Definitions - IfJsonPrimitive
 * @module tutils/types/IfJsonPrimitive
 */

import type IsJsonPrimitive from './is-json-primitive'

/**
 * Conditional type that resolves depending on whether or not `T` extends
 * `JsonPrimitive`.
 *
 * @see {@linkcode IsJsonPrimitive}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` extends `JsonPrimitive`
 * @template False - Type if `T` does not extend `JsonPrimitive`
 */
type IfJsonPrimitive<T, True, False> = IsJsonPrimitive<T> extends true
  ? True
  : False

export type { IfJsonPrimitive as default }
