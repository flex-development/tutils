/**
 * @file Utilities - isSet
 * @module tutils/utils/isSet
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Set} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set
 *
 * @todo examples
 *
 * @template T - Set item type
 *
 * @param {unknown} value - Value to check
 * @return {value is Set<T>} `true` if `value` is a `Set`
 */
const isSet = <T>(value: unknown): value is Set<T> => {
  return isObject(value) && equal(Set, value.constructor)
}

export default isSet
