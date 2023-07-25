/**
 * @file Utilities - group
 * @module tutils/utils/group
 */

import type { Mapper, PropertyKey } from '#src/types'

/**
 * Groups each item in an array.
 *
 * The return value is a plain object with a key for each group, where each key
 * value is an array containing group items.
 *
 * A `mapper` function is used to convert array items to group keys.
 *
 * @see {@linkcode Mapper}
 *
 * @todo examples
 *
 * @template T - Array to group
 * @template K - Identity key type
 *
 * @param {T} arr - Array to group
 * @param {Mapper<T, K>} mapper - Array item interpolator
 * @return {Partial<Record<K, T[number][]>>} Groups object
 */
const group = <
  T extends readonly unknown[],
  K extends PropertyKey = PropertyKey
>(
  arr: T,
  mapper: Mapper<T, K>
): { [H in K]?: T[number][] } => {
  return arr.reduce<{ [H in K]?: T[number][] }>((acc, item, i) => {
    /**
     * Group key.
     *
     * @const {K} key
     */
    const key: K = mapper(item, i, arr)

    // initialize group
    !acc[key] && (acc[key] = [])

    // add group item
    acc[key]!.push(item)

    return acc
  }, {})
}

export default group
