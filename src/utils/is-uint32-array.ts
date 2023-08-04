/**
 * @file Utilities - isUint32Array
 * @module tutils/utils/isUint32Array
 */

import isObject from './is-object'

/**
 * Checks if `value` is an {@linkcode Uint32Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Uint32Array} `true` if `value` is `Uint32Array`
 */
const isUint32Array = (value: unknown): value is Uint32Array => {
  return isObject(value) && value.constructor === Uint32Array
}

export default isUint32Array
