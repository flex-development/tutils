/**
 * @file Utilities - count
 * @module tutils/utils/count
 */

import type { ArrayPredicate } from '#src/types'
import constant from './constant'
import reduce from './reduce'

/**
 * Returns the number of items in an array that meet a given `condition`.
 *
 * The length of the array will be returned if a `condition` is not provided.
 *
 * @todo examples
 *
 * @template T - Array to query
 *
 * @param {T} arr - Array to query
 * @param {ArrayPredicate<T>} [condition=constant(true)] - Condition function
 * @return {number} Number of items in `arr` that meet `condition`
 */
const count = <T extends readonly unknown[]>(
  arr: T,
  condition: ArrayPredicate<T> = constant(true)
): number => {
  return reduce(arr, (acc, curr, index) => {
    return condition(curr, index, arr) ? ++acc : acc
  }, 0)
}

export default count
