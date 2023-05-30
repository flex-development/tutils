/**
 * @file Type Definitions - IsBoolean
 * @module tutils/types/IsBoolean
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is a `boolean`.
 *
 * @template T - Type to evaluate
 */
type IsBoolean<T> = IfAnyOrNever<T, false, [T] extends [boolean] ? true : false>

export type { IsBoolean as default }
