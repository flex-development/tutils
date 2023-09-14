/**
 * @file Utilities - group
 * @module tutils/utils/group
 */

import type { Mapper, PropertyKey } from '#src/types'
import cast from './cast'
import isUndefined from './is-undefined'

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
 * @template T - Array to group
 * @template K - Identity key type
 *
 * @param {T} arr - Array to group
 * @param {Mapper<T, K>} key - Group key mapper
 * @return {Record<K, T[number][]>} Groups object
 */
const group = <
  T extends readonly unknown[],
  K extends PropertyKey = PropertyKey
>(
  arr: T,
  key: Mapper<T, K>
): { [H in K]: T[number][] } => {
  return arr.reduce<{ [H in K]: T[number][] }>((acc, item, i) => {
    /**
     * Group key.
     *
     * @const {K} k
     */
    const k: K = key(item, i, arr)

    // initialize group
    isUndefined(acc[k]) && (acc[k] = [])

    // add group item
    acc[k].push(item)

    return acc
  }, cast({}))
}

export default group
