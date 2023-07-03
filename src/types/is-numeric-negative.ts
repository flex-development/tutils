/**
 * @file Type Definitions - IsNegativeNumeric
 * @module tutils/types/IsNegativeNumeric
 */

import type IfAnyOrNever from './if-any-or-never'
import type NegativeNumeric from './numeric-negative'

/**
 * Returns a boolean indicating if `T` extends {@linkcode NegativeNumeric}.
 *
 * @example
 *  type X = IsNegativeNumeric<'-1'>
 *  // true
 * @example
 *  type X = IsNegativeNumeric<-1 | -2 | '-1' | '-2' | '0' | '1' | 0 | 1>
 *  // boolean
 * @example
 *  type X = IsNegativeNumeric<'0'>
 *  // false
 * @example
 *  type X = IsNegativeNumeric<'1'>
 *  // false
 * @example
 *  type X = IsNegativeNumeric<-1>
 *  // false
 * @example
 *  type X = IsNegativeNumeric<1>
 *  // false
 * @example
 *  type X = IsNegativeNumeric<string>
 *  // false
 * @example
 *  type X = IsNegativeNumeric<any>
 *  // false
 * @example
 *  type X = IsNegativeNumeric<never>
 *  // false
 * @example
 *  type X = IsNegativeNumeric<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsNegativeNumeric<T> = IfAnyOrNever<
  T,
  false,
  T extends NegativeNumeric ? true : false
>

export type { IsNegativeNumeric as default }
