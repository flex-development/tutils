/**
 * @file Type Definitions - IsNumeric
 * @module tutils/types/IsNumeric
 */

import type IfAnyOrNever from './if-any-or-never'
import type Numeric from './numeric'
import type NegativeNumeric from './numeric-negative'
import type Trim from './trim'

/**
 * Returns a boolean indicating if `T` extends {@linkcode NegativeNumeric} or
 * {@linkcode Numeric}.
 *
 * @see https://github.com/microsoft/TypeScript/issues/46109
 *
 * @example
 *  type X = IsNumeric<'-1'>
 *  // true
 * @example
 *  type X = IsNumeric<'0'>
 *  // true
 * @example
 *  type X = IsNumeric<'1'>
 *  // true
 * @example
 *  type X = IsNumeric<-1 | -2 | '-1' | '-2' | '0' | '1' | 0 | 1>
 *  // boolean
 * @example
 *  type X = IsNumeric<1>
 *  // false
 * @example
 *  type X = IsNumeric<number>
 *  // false
 * @example
 *  type X = IsNumeric<string>
 *  // false
 * @example
 *  type X = IsNumeric<any>
 *  // false
 * @example
 *  type X = IsNumeric<never>
 *  // false
 * @example
 *  type X = IsNumeric<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsNumeric<T> = IfAnyOrNever<
  T,
  false,
  T extends NegativeNumeric | Numeric
    ? Trim<T> extends T
      ? true
      : false
    : false
>

export type { IsNumeric as default }
