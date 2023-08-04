/**
 * @file Utilities - isWeakMap
 * @module tutils/utils/isWeakMap
 */

import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode WeakMap} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 *
 * @todo examples
 *
 * @template K - Map key type
 * @template V - Map item type
 *
 * @param {unknown} value - Value to check
 * @return {value is WeakMap<K, V>} `true` if `value` is `WeakMap` instance
 */
const isWeakMap = <K extends object, V>(
  value: unknown
): value is WeakMap<K, V> => {
  return isObject(value) && value.constructor === WeakMap
}

export default isWeakMap
