/**
 * @file Utilities - isMap
 * @module tutils/utils/isMap
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Map} instance.
 *
 * @template K - Map key type
 * @template V - Map item type
 *
 * @param {unknown} value - Value to check
 * @return {value is Map<K, V>} `true` if `value` is {@linkcode Map} instance
 */
function isMap<K, V>(value: unknown): value is Map<K, V> {
  return isObject(value) && equal(Reflect.get(value, 'constructor'), Map)
}

export default isMap
