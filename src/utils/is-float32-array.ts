/**
 * @file Utilities - isFloat32Array
 * @module tutils/utils/isFloat32Array
 */

import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Float32Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Float32Array} `true` if `value` is a `Float32Array`
 */
const isFloat32Array = (value: unknown): value is Float32Array => {
  return isObject(value) && value.constructor === Float32Array
}

export default isFloat32Array
