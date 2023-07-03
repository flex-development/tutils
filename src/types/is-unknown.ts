/**
 * @file Type Definitions - IsUnknown
 * @module tutils/types/IsUnknown
 */

import type IfAny from './if-any'

/**
 * Returns a boolean indicating if `T` is `unknown`.
 *
 * @example
 *  type X = IsUnknown<unknown>
 *  // true
 * @example
 *  type X = IsUnknown<any>
 *  // false
 * @example
 *  type X = IsUnknown<never>
 *  // false
 * @example
 *  type X = IsUnknown<string>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsUnknown<T> = IfAny<T, false, [unknown] extends [T] ? true : false>

export type { IsUnknown as default }
