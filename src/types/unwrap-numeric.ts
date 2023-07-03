/**
 * @file Type Definitions - UnwrapNumeric
 * @module tutils/types/UnwrapNumeric
 */

import type IfAny from './if-any'
import type NegativeNumeric from './numeric-negative'

/**
 * Extracts a number from a numeric.
 *
 * A numeric is a string containing only numbers (not including the leading `-`
 * if the numeric is negative).
 *
 * @example
 *  type X = UnwrapNumeric<'-3'>
 *  // -3
 * @example
 *  type X = UnwrapNumeric<'13'>
 *  // 13
 * @example
 *  type X = UnwrapNumeric<'-0'>
 *  // 0
 * @example
 *  type X = UnwrapNumeric<Numeric>
 *  // number
 * @example
 *  type X = UnwrapNumeric<NegativeNumeric>
 *  // number
 * @example
 *  type X = UnwrapNumeric<any>
 *  // number
 * @example
 *  type X = UnwrapNumeric<never>
 *  // never
 * @example
 *  type X = UnwrapNumeric<unknown>
 *  // never
 *
 * @template T - Type to evaluate
 */
type UnwrapNumeric<T> = IfAny<
  T,
  number,
  T extends `-${infer N extends 0}`
    ? N
    : T extends `${infer N extends number}`
    ? N
    : T extends NegativeNumeric
    ? number
    : never
>

export type { UnwrapNumeric as default }
