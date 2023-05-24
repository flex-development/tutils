/**
 * @file Utilities - count
 * @module tutils/utils/count
 */

import type { Fn } from '#src/types'

/**
 * Returns the number of items in `array` that meet `condition`.
 *
 * If `condition` is omitted, the length of `array` will be returned.
 *
 * @template T - Array item type
 *
 * @param {ReadonlyArray<T>} array - Array to query
 * @param {Fn<[T, number], boolean>} [condition=()=>true] - Condition function
 * @return {number} Number of items in `array` that meet `condition`
 */
function count<T>(
  array: readonly T[],
  condition: Fn<[T, number], boolean> = () => true
): number {
  return array.reduce((acc: number, curr: T, index: number): number => {
    return condition(curr, index) ? acc + 1 : acc
  }, 0)
}

export default count
