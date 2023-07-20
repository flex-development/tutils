/**
 * @file Utilities - isInt16Array
 * @module tutils/utils/isInt16Array
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is an {@linkcode Int16Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Int16Array} `true` if `value` is a `Int16Array`
 */
const isInt16Array = (value: unknown): value is Int16Array => {
  return isObject(value) && equal(value.constructor, Int16Array)
}

export default isInt16Array
