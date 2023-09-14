/**
 * @file Utilities - objectify
 * @module tutils/utils/objectify
 */

import type { Mapper, PropertyKey } from '#src/types'
import cast from './cast'
import define from './define'

/**
 * Convert an array to a plain object.
 *
 * @see {@linkcode Mapper}
 *
 * @todo examples
 *
 * @template T - Array to convert
 * @template K - Object key type
 * @template V - Object value type
 *
 * @param {T} arr - Array to convert
 * @param {Mapper<T, K>} [key=(_,index)=>index] - Object key function
 * @param {Mapper<T, V>} [value=item=>item] - Object value function
 * @return {Record<K, V>} New plain object
 */
const objectify = <
  T extends readonly unknown[],
  K extends PropertyKey = number,
  V = T[number]
>(
  arr: T,
  key: Mapper<T, K> = (_, index) => cast(index),
  value: Mapper<T, V> = item => cast(item)
): { [H in K]: V } => {
  return arr.reduce<{ [H in K]: V }>((acc, item, i) => {
    return define(acc, key(item, i, arr), { value: value(item, i, arr) })
  }, cast({}))
}

export default objectify
