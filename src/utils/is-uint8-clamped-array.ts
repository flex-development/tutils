/**
 * @file Utilities - isUint8ClampedArray
 * @module tutils/utils/isUint8ClampedArray
 */

import isObject from './is-object'

/**
 * Checks if `value` is an {@linkcode Uint8ClampedArray} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Uint8ClampedArray} `true` if `value` is `Uint8ClampedArray`
 */
const isUint8ClampedArray = (value: unknown): value is Uint8ClampedArray => {
  return isObject(value) && value.constructor === Uint8ClampedArray
}

export default isUint8ClampedArray
