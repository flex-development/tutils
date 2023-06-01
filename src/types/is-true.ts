/**
 * @file Type Definitions - IsTrue
 * @module tutils/types/IsTrue
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is `true`.
 *
 * @template T - Type to evaluate
 */
type IsTrue<T> = IfAnyOrNever<T, false, [T] extends [true] ? true : false>

export type { IsTrue as default }
