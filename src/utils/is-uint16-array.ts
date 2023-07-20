/**
 * @file Utilities - isUint16Array
 * @module tutils/utils/isUint16Array
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is an {@linkcode Uint16Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Uint16Array} `true` if `value` is `Uint16Array`
 */
const isUint16Array = (value: unknown): value is Uint16Array => {
  return isObject(value) && equal(value.constructor, Uint16Array)
}

export default isUint16Array
