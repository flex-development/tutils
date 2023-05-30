/**
 * @file Type Definitions - IsUndefined
 * @module tutils/types/IsUndefined
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is `undefined`.
 *
 * @template T - Type to evaluate
 */
type IsUndefined<T> = IfAnyOrNever<
  T,
  false,
  [T] extends [undefined] ? true : false
>

export type { IsUndefined as default }
