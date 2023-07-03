/**
 * @file Type Definitions - IsJsonPrimitive
 * @module tutils/types/IsJsonPrimitive
 */

import type IfAnyOrNever from './if-any-or-never'
import type JsonPrimitive from './json-primitive'

/**
 * Returns a boolean indicating if `T` extends {@linkcode JsonPrimitive}.
 *
 * @example
 *  type X = IsJsonPrimitive<boolean>
 *  // true
 * @example
 *  type X = IsJsonPrimitive<null>
 *  // true
 * @example
 *  type X = IsJsonPrimitive<number>
 *  // true
 * @example
 *  type X = IsJsonPrimitive<string>
 *  // true
 * @example
 *  type X = IsJsonPrimitive<JsonPrimitive>
 *  // true
 * @example
 *  type X = IsJsonPrimitive<Optional<JsonPrimitive>>
 *  // boolean
 * @example
 *  type X = IsJsonPrimitive<object>
 *  // false
 * @example
 *  type X = IsJsonPrimitive<undefined>
 *  // false
 * @example
 *  type X = IsJsonPrimitive<any>
 *  // false
 * @example
 *  type X = IsJsonPrimitive<never>
 *  // false
 * @example
 *  type X = IsJsonPrimitive<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsJsonPrimitive<T> = IfAnyOrNever<
  T,
  false,
  T extends JsonPrimitive ? true : false
>

export type { IsJsonPrimitive as default }
