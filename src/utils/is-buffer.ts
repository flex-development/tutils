/**
 * @file Utilities - isBuffer
 * @module tutils/utils/isBuffer
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Buffer} instance.
 *
 * @see https://nodejs.org/api/buffer.html
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Buffer} `true` if `value` is a `Buffer`
 */
const isBuffer = (value: unknown): value is Buffer => {
  return isObject(value) && equal(Buffer, value.constructor)
}

export default isBuffer
