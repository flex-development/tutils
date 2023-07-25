/**
 * @file Utilities - intersection
 * @module tutils/utils/intersection
 */

import type { Fn, Nilable, PropertyKey } from '#src/types'
import includes from './includes'
import select from './select'

/**
 * Returns an array of items included in both `arr1` and `arr2`.
 *
 * An `identity` function can be used to convert array items to unique keys. If
 * provided, two items with the same identity key will be considered equal.
 *
 * @todo examples
 *
 * @template T - Array item type
 * @template K - Identity key type
 *
 * @param {ReadonlyArray<T>} arr1 - First array to evaluate
 * @param {ReadonlyArray<T>} arr2 - Second array to evaluate
 * @param {Nilable<Fn<[T], K>>} [identity] - Identity key function
 * @return {T[]} Array of items included in both `arr1` and `arr2`
 */
const intersection = <T, K extends PropertyKey = PropertyKey>(
  arr1: readonly T[],
  arr2: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): T[] => select(arr1, item => includes(arr2, item, identity))

export default intersection
