/**
 * @file Utilities - groupAsync
 * @module tutils/utils/groupAsync
 */

import type { Mapper, PropertyKey } from '#src/types'
import cast from './cast'
import isUndefined from './is-undefined'
import reduceAsync from './reduce-async'

/**
 * Group each item in an array.
 *
 * The return value is a plain object with a key for each group, where each key
 * value is an array containing group items.
 *
 * A `key` function is used to map array items to group keys.
 *
 * @see {@linkcode Mapper}
 *
 * @todo examples
 *
 * @async
 *
 * @template T - Array to group
 * @template K - Identity key type
 *
 * @param {T} arr - Array to group
 * @param {Mapper<T, K | Promise<K>>} key - Group key mapper
 * @return {Promise<Record<K, T[number][]>>} Groups object
 */
const groupAsync = async <
  T extends readonly unknown[],
  K extends PropertyKey = PropertyKey
>(
  arr: T,
  key: Mapper<T, K | Promise<K>>
): Promise<{ [H in K]: T[number][] }> => {
  return reduceAsync(arr, async (acc, item, i) => {
    /**
     * Group key.
     *
     * @const {K} k
     */
    const k: K = await key(item, i, arr)

    // initialize group
    isUndefined(acc[k]) && (acc[k] = [])

    // add group item
    acc[k].push(item)

    return acc
  }, cast({}))
}

export default groupAsync
