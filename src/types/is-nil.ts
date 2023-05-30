/**
 * @file Type Definitions - IsNil
 * @module tutils/types/IsNil
 */

import type IfAnyOrNever from './if-any-or-never'
import type NIL from './nil'

/**
 * Returns a boolean indicating if `T` is {@linkcode NIL}.
 *
 * @template T - Type to evaluate
 */
type IsNil<T> = IfAnyOrNever<T, false, [T] extends [NIL] ? true : false>

export type { IsNil as default }
