/**
 * @file Type Definitions - IsFunction
 * @module tutils/types/IsFunction
 */

import type Fn from './fn'
import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is a function.
 *
 * @see {@linkcode Fn}
 *
 * @template T - Type to evaluate
 */
type IsFunction<T> = IfAnyOrNever<T, false, [T] extends [Fn] ? true : false>

export type { IsFunction as default }
