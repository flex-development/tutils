/**
 * @file Type Definitions - IsInteger
 * @module tutils/types/IsInteger
 */

import type IfAnyOrNever from './if-any-or-never'
import type Integer from './integer'
import type IsNumber from './is-number'
import type Stringify from './stringify'

/**
 * Returns a boolean indicating if `T` extends an integer.
 *
 * @example
 *  type X = IsInteger<-1>
 *  // true
 * @example
 *  type X = IsInteger<0>
 *  // true
 * @example
 *  type X = IsInteger<1>
 *  // true
 * @example
 *  type X = IsInteger<Integer>
 *  // true
 * @example
 *  type X = IsInteger<-1 | 1n>
 *  // boolean
 * @example
 *  type X = IsInteger<bigint>
 *  // false
 * @example
 *  type X = IsInteger<number>
 *  // false
 * @example
 *  type X = IsInteger<any>
 *  // false
 * @example
 *  type X = IsInteger<never>
 *  // false
 * @example
 *  type X = IsInteger<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsInteger<T> = IfAnyOrNever<
  T,
  false,
  // dprint-ignore
  T extends Integer
    ? true
    : IsNumber<T> extends true
    ? T extends symbol
      ? false
      : Stringify<T> extends Stringify<bigint>
      ? true
      : false
    : false
>

export type { IsInteger as default }
