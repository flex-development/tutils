/**
 * @file Type Definitions - IsObjectCurly
 * @module tutils/types/IsObjectCurly
 */

import type IfAnyOrNever from './if-any-or-never'
import type ObjectCurly from './object-curly'

/**
 * Returns a boolean indicating if `T` is a curly-braced object.
 *
 * @see {@linkcode ObjectCurly}
 *
 * @template T - Type to evaluate
 */
type IsObjectCurly<T> = IfAnyOrNever<
  T,
  false,
  [T] extends [ObjectCurly] ? true : false
>

export type { IsObjectCurly as default }
