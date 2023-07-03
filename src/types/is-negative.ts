/**
 * @file Type Definitions - IsNegative
 * @module tutils/types/IsNegative
 */

import type IfAnyOrNever from './if-any-or-never'
import type IsNegativeNumeric from './is-numeric-negative'
import type NumberLike from './number-like'
import type Stringify from './stringify'

/**
 * Returns a boolean indicating if `T` extends a negative value.
 *
 * Negative values include:
 *
 * - `NegativeNumeric`
 * - A negative `bigint` (e.g. `-1n`)
 * - A negative `number` (e.g. `-1`)
 *
 * @see {@linkcode IsNegativeNumeric}
 *
 * @example
 *  type X = IsNegative<-1>
 *  // true
 * @example
 *  type X = IsNegative<-1n>
 *  // true
 * @example
 *  type X = IsNegative<'-1'>
 *  // true
 * @example
 *  type X = IsNegative<-1 | -1n | '-1' | 1>
 *  // boolean
 * @example
 *  type X = IsNegative<0>
 *  // false
 * @example
 *  type X = IsNegative<1>
 *  // false
 * @example
 *  type X = IsNegative<0n>
 *  // false
 * @example
 *  type X = IsNegative<'1'>
 *  // false
 * @example
 *  type X = IsNegative<bigint>
 *  // false
 * @example
 *  type X = IsNegative<number>
 *  // false
 * @example
 *  type X = IsNegative<string>
 *  // false
 * @example
 *  type X = IsNegative<any>
 *  // false
 * @example
 *  type X = IsNegative<never>
 *  // false
 * @example
 *  type X = IsNegative<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsNegative<T> = IfAnyOrNever<
  T,
  false,
  T extends NumberLike | bigint ? IsNegativeNumeric<Stringify<T>> : false
>

export type { IsNegative as default }
