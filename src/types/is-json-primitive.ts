/**
 * @file Type Definitions - IsJsonPrimitive
 * @module tutils/types/IsJsonPrimitive
 */

import type JsonPrimitive from './json-primitive'

/**
 * Returns a boolean indicating if `T` extends {@linkcode JsonPrimitive}.
 *
 * @template T - Type to evaluate
 */
type IsJsonPrimitive<T> = T extends JsonPrimitive ? true : false

export type { IsJsonPrimitive as default }
