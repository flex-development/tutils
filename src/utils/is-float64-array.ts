/**
 * @file Utilities - isFloat64Array
 * @module tutils/utils/isFloat64Array
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Float64Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Float64Array} `true` if `value` is a `Float64Array`
 */
const isFloat64Array = (value: unknown): value is Float64Array => {
  return isObject(value) && equal(Float64Array, value.constructor)
}

export default isFloat64Array
