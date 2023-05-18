/**
 * @file Utilities - isSet
 * @module tutils/utils/isSet
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Set} instance.
 *
 * @template T - Set item type
 *
 * @param {unknown} value - Value to check
 * @return {value is Set<T>} `true` if `value` is {@linkcode Set} instance
 */
function isSet<T>(value: unknown): value is Set<T> {
  return isObject(value) && equal(Reflect.get(value, 'constructor'), Set)
}

export default isSet
