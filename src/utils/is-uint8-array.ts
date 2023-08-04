/**
 * @file Utilities - isUint8Array
 * @module tutils/utils/isUint8Array
 */

import isObject from './is-object'

/**
 * Checks if `value` is an {@linkcode Uint8Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Uint8Array} `true` if `value` is `Uint8Array`
 */
const isUint8Array = (value: unknown): value is Uint8Array => {
  return isObject(value) && value.constructor === Uint8Array
}

export default isUint8Array
