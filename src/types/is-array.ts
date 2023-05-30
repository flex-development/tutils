/**
 * @file Type Definitions - IsArray
 * @module tutils/types/IsArray
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is an array of type `V`.
 *
 * @template T - Type to evaluate
 * @template V - Array element type
 */
type IsArray<T, V = unknown> = IfAnyOrNever<
  T,
  false,
  [T] extends [readonly V[]] ? true : false
>

export type { IsArray as default }
