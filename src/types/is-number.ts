/**
 * @file Type Definitions - IsNumber
 * @module tutils/types/IsNumber
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is a `number`.
 *
 * @template T - Type to evaluate
 */
type IsNumber<T> = IfAnyOrNever<T, false, [T] extends [number] ? true : false>

export type { IsNumber as default }
