/**
 * @file Type Definitions - IsJsonPrimitive
 * @module tutils/types/IsJsonPrimitive
 */

import type IfAnyOrNever from './if-any-or-never'
import type JsonPrimitive from './json-primitive'

/**
 * Returns a boolean indicating if `T` is a {@linkcode JsonPrimitive}.
 *
 * @template T - Type to evaluate
 */
type IsJsonPrimitive<T> = IfAnyOrNever<
  T,
  false,
  [T] extends [JsonPrimitive] ? true : false
>

export type { IsJsonPrimitive as default }
