/**
 * @file Utilities - sort
 * @module tutils/utils/sort
 */

import type { Fn } from '#src/types'

/**
 * Sorts `array` without modifying it.
 *
 * @template T - Array item type
 *
 * @param {ReadonlyArray<T>} array - Array to sort
 * @param {Fn<[T, T], number>} compare - Comparison function
 * @return {T[]} Sorted copy of `array`
 */
function sort<T>(array: readonly T[], compare: Fn<[T, T], number>): T[] {
  return [...array].sort(compare)
}

export default sort
