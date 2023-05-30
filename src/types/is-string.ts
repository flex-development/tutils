/**
 * @file Type Definitions - IsString
 * @module tutils/types/IsString
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is a `string`.
 *
 * @template T - Type to evaluate
 */
type IsString<T> = IfAnyOrNever<T, false, [T] extends [string] ? true : false>

export type { IsString as default }
