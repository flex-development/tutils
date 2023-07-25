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
 * @todo examples
 *
 * @template T - Array item type
 * @template K - Identity key type
 *
 * @param {ReadonlyArray<T>} arr1 - First array to check
 * @param {ReadonlyArray<T>} arr2 - Second array to check
 * @param {Nilable<Fn<[T], K>>} [identity] - Identity key function
 * @return {boolean} `true` if `arr1` and `arr2` intersect
 */
const intersects = <T, K extends PropertyKey = NumberString>(
  arr1: readonly T[],
  arr2: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): boolean => !!intersection(arr1, arr2, identity).length

export default intersects
