/**
 * @file Utilities - isMap
 * @module tutils/utils/isMap
 */

import type { PropertyKey } from '#src/types'
import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Map} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map
 *
 * @todo examples
 *
 * @template K - Map key type
 * @template V - Map item type
 *
 * @param {unknown} value - Value to check
 * @return {value is Map<K, V>} `true` if `value` is a `Map`
 */
const isMap = <K = PropertyKey, V = unknown>(
  value: unknown
): value is Map<K, V> => isObject(value) && equal(Map, value.constructor)

export default isMap
