/**
 * @file Type Definitions - IsNegativeInteger
 * @module tutils/types/IsNegativeInteger
 */

import type IfAnyOrNever from './if-any-or-never'
import type IfInteger from './if-integer'
import type IsNegative from './is-negative'

/**
 * Returns a boolean indicating if `T` extends a negative integer.
 *
 * @example
 *  type X = IsNegativeInteger<-1>
 *  // true
 * @example
 *  type X = IsNegativeInteger<-1 | 1>
 *  // boolean
 * @example
 *  type X = IsNegativeInteger<-1n>
 *  // false
 * @example
 *  type X = IsNegativeInteger<0>
 *  // false
 * @example
 *  type X = IsNegativeInteger<1>
 *  // false
 * @example
 *  type X = IsNegativeInteger<number>
 *  // false
 * @example
 *  type X = IsNegativeInteger<any>
 *  // false
 * @example
 *  type X = IsNegativeInteger<never>
 *  // false
 * @example
 *  type X = IsNegativeInteger<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsNegativeInteger<T> = IfAnyOrNever<
  T,
  false,
  T extends number ? IfInteger<T, IsNegative<T>, false> : false
>

export type { IsNegativeInteger as default }
