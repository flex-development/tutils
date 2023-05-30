/**
 * @file Type Definitions - IfJsonPrimitive
 * @module tutils/types/IfJsonPrimitive
 */

import type IsJsonPrimitive from './is-json-primitive'

/**
 * Returns a type that indicates if `T` is a `JsonPrimitive`.
 *
 * @see {@linkcode IsJsonPrimitive}
 *
 * @template T - Type to evaluate
 * @template True - Type if `T` is a `JsonPrimitive`
 * @template False - Type if `T` is not a `JsonPrimitive`
 */
type IfJsonPrimitive<T, True, False> = IsJsonPrimitive<T> extends true
  ? True
  : False

export type { IfJsonPrimitive as default }
