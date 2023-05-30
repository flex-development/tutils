/**
 * @file Type Definitions - IsNull
 * @module tutils/types/IsNull
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is `null`.
 *
 * @template T - Type to evaluate
 */
type IsNull<T> = IfAnyOrNever<T, false, [T] extends [null] ? true : false>

export type { IsNull as default }
