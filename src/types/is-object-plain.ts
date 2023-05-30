/**
 * @file Type Definitions - IsObjectPlain
 * @module tutils/types/IsObjectPlain
 */

import type IfAnyOrNever from './if-any-or-never'
import type ObjectPlain from './object-plain'

/**
 * Returns a boolean indicating if `T` is a plain object.
 *
 * @see {@linkcode ObjectPlain}
 *
 * @template T - Type to evaluate
 */
type IsObjectPlain<T> = IfAnyOrNever<
  T,
  false,
  [T] extends [ObjectPlain] ? true : false
>

export type { IsObjectPlain as default }
