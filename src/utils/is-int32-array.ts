/**
 * @file Utilities - isInt32Array
 * @module tutils/utils/isInt32Array
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is an {@linkcode Int32Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Int32Array} `true` if `value` is a `Int32Array`
 */
const isInt32Array = (value: unknown): value is Int32Array => {
  return isObject(value) && equal(Int32Array, value.constructor)
}

export default isInt32Array
