/**
 * @file Utilities - reduceRight
 * @module tutils/utils/reduceRight
 */

import at from './at'
import cast from './cast'
import type { Reducer } from './reduce'

/**
 * Invoke a callback function once per element in an array, in descending order,
 * to generate a final accumulated value.
 *
 * The return value of the callback function is the accumulated result, and is
 * provided as an argument in the next call to the callback function.
 *
 * @see {@linkcode Reducer}
 *
 * @todo examples
 *
 * @template U - Accumulated result type
 * @template T - Array value type
 *
 * @param {ReadonlyArray<T>} arr - Array to reduce
 * @param {Reducer<U, T>} reducer - Reducer function
 * @param {U} [initial=at(arr, -1)] - Initial accumulated value
 * @return {U} Final accumulated value
 */
const reduceRight = <U, T>(
  arr: readonly T[],
  reducer: Reducer<U, T>,
  initial: U = cast(at(arr, -1))
): U => arr.reduceRight(reducer, initial)

export default reduceRight
