/**
 * @file Utilities - group
 * @module tutils/utils/group
 */

import type { Fn, IndexSignature, NumberString } from '#src/types'

/**
 * Groups each item in `array`.
 *
 * The return value is a plain object with a key for each group, where each key
 * value is an array containing group items. An `identity` function is used to
 * convert array items to group keys.
 *
 * @template T - Array item type
 * @template K - Identity key type
 *
 * @param {ReadonlyArray<T>} array - Array to evaluate
 * @param {Fn<[T], K>} identity - Identity key function
 * @return {Partial<Record<K, T[]>>} Groups object
 */
function group<T, K extends IndexSignature = NumberString>(
  array: readonly T[],
  identity: Fn<[T], K>
): Partial<Record<K, T[]>> {
  return array.reduce<Partial<Record<K, T[]>>>((acc, curr) => {
    /**
     * Group key.
     *
     * @const {K} key
     */
    const key: K = identity(curr)

    // initialize group
    !acc[key] && (acc[key] = [])

    // add group item
    acc[key]!.push(curr)

    return acc
  }, {})
}

export default group
