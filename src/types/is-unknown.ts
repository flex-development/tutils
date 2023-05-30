/**
 * @file Type Definitions - IsUnknown
 * @module tutils/types/IsUnknown
 */

import type IfAny from './if-any'

/**
 * Returns a boolean indicating if `T` is `unknown`.
 *
 * @template T - Type to evaluate
 */
type IsUnknown<T> = IfAny<T, false, [unknown] extends [T] ? true : false>

export type { IsUnknown as default }
