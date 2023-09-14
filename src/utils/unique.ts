/**
 * @file Utilities - unique
 * @module tutils/utils/unique
 */

import type { Fn, Nilable, PropertyKey } from '#src/types'
import cast from './cast'
import includes from './includes'
import reduce from './reduce'

/**
 * Removes all duplicates from an array.
 *
 * An `identity` function can be used to convert array items to unique keys. If
 * provided, two items with the same identity key will be considered equal.
 *
 * @todo examples
 *
 * @template T - Array item type
 * @template K - Identity key type
 * @template U - Filtered array type
 *
 * @param {ReadonlyArray<T>} arr - Array to evaluate
 * @param {Nilable<Fn<[T], K>>} [identity] - Identity key function
 * @return {U[]} Copy of `arr` with duplicates removed
 */
const unique = <T, K extends PropertyKey = PropertyKey, U = T>(
  arr: readonly T[],
  identity?: Nilable<Fn<[T], K>>
): U[] => {
  return reduce(arr, (acc, item) => {
    return includes(acc, item, null, identity) ? acc : cast([...acc, item])
  }, cast([]))
}

export default unique
