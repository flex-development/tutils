/**
 * @file Utilities - isBigUint64Array
 * @module tutils/utils/isBigUint64Array
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode BigUint64Array} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is BigUint64Array} `true` if `value` is an `BigUint64Array`
 */
const isBigUint64Array = (value: unknown): value is BigUint64Array => {
  return isObject(value) && equal(value.constructor, BigUint64Array)
}

export default isBigUint64Array
