/**
 * @file Utilities - isWeakSet
 * @module tutils/utils/isWeakSet
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode WeakSet} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 *
 * @todo examples
 *
 * @template T - Set item type
 *
 * @param {unknown} value - Value to check
 * @return {value is WeakSet<T>} `true` if `value` is `WeakSet` instance
 */
const isWeakSet = <T extends object>(value: unknown): value is WeakSet<T> => {
  return isObject(value) && equal(value.constructor, WeakSet)
}

export default isWeakSet
