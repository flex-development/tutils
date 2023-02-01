/**
 * @file Type Guards - isInt
 * @module tutils/guards/isInt
 */

import isNumber from './is-number'

/**
 * Checks if the given `value` is an integer.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is number} `true` if `value` is an integer
 */
const isInt = (value: unknown): value is number => {
  return isNumber(value) && value % 1 === 0
}

export default isInt
