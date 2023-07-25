/**
 * @file Utilities - isBigInt64Array
 * @module tutils/utils/isBigInt64Array
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode BigInt64Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is BigInt64Array} `true` if `value` is an `BigInt64Array`
 */
const isBigInt64Array = (value: unknown): value is BigInt64Array => {
  return isObject(value) && equal(BigInt64Array, value.constructor)
}

export default isBigInt64Array
