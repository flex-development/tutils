/**
 * @file Utilities - isInt8Array
 * @module tutils/utils/isInt8Array
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is an {@linkcode Int8Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Int8Array} `true` if `value` is a `Int8Array`
 */
const isInt8Array = (value: unknown): value is Int8Array => {
  return isObject(value) && equal(value.constructor, Int8Array)
}

export default isInt8Array
