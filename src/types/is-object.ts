/**
 * @file Type Definitions - IsObject
 * @module tutils/types/IsObject
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is an `object`.
 *
 * @template T - Type to evaluate
 */
type IsObject<T> = IfAnyOrNever<T, false, [T] extends [object] ? true : false>

export type { IsObject as default }
