/**
 * @file Utilities - diff
 * @module tutils/utils/diff
 */

import type { Fn, Nilable, PropertyKey } from '#src/types'
import includes from './includes'
import intersects from './intersects'

/**
 * Returns an array of items exclusive to the first given array.
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
 * @return {T[]} Array containing items exclusive to `arr1`
 */
const diff = <T, K extends PropertyKey = PropertyKey>(
  arr1: readonly T[],
  arr2: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): T[] => {
  return intersects(arr1, arr2, identity)
    ? arr1.reduce<T[]>((acc, item) => {
      return includes(arr2, item, null, identity) ? acc : [...acc, item]
    }, [])
    : [...arr1]
}

export default diff
