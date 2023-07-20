/**
 * @file Utilities - isArrayBuffer
 * @module tutils/utils/isArrayBuffer
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is an {@linkcode ArrayBuffer} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is ArrayBuffer} `true` if `value` is an `ArrayBuffer`
 */
const isArrayBuffer = (value: unknown): value is ArrayBuffer => {
  return isObject(value) && equal(value.constructor, ArrayBuffer)
}

export default isArrayBuffer
