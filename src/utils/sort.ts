/**
 * @file Utilities - sort
 * @module tutils/utils/sort
 */

import type { Fn, Writable } from '#src/types'
import cast from './cast'

/**
 * Sorts an array without modifying it.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *
 * @todo examples
 *
 * @template T - Array to sort
 *
 * @param {T} arr - Array to sort
 * @param {Fn<[T[number], T[number]], number>} compare - Comparison function
 * @return {Writable<T>} Sorted copy of target array
 */
const sort = <T extends readonly unknown[]>(
  arr: T,
  compare: Fn<[T[number], T[number]], number>
): Writable<T> => cast([...arr].sort(compare))

export default sort
