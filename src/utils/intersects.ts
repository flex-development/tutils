/**
 * @file Utilities - intersects
 * @module tutils/utils/intersects
 */

import type { Fn, Nilable, NumberString, PropertyKey } from '#src/types'
import intersection from './intersection'

/**
 * Checks if two arrays intersect.
 *
 * Two arrays intersect if at least one item contained in the first array is
 * also contained in the second.
 *
 * An `identity` function can be used to convert array items to unique keys. If
 * provided, two items with the same identity key will be considered equal.
 *
 * @template T - Array item type
 * @template K - Identity key type
 *
 * @param {ReadonlyArray<T>} array1 - First array to check
 * @param {ReadonlyArray<T>} array2 - Second array to check
 * @param {Nilable<Fn<[T], K>>} [identity] - Identity key function
 * @return {boolean} `true` if `array1` and `array2` intersect
 */
function intersects<T, K extends PropertyKey = NumberString>(
  array1: readonly T[],
  array2: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): boolean {
  return !!intersection(array1, array2, identity).length
}

export default intersects
