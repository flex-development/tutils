/**
 * @file Type Guards - isFloat
 * @module tutils/guards/isFloat
 */

import isNumber from './is-number'

/**
 * Checks if the given `value` is a floating point number (float).
 *
 * @see https://techopedia.com/definition/23980/float-computer-science
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is number} `true` if `value` is a float
 */
const isFloat = (value: unknown): value is number => {
  return isNumber(value) && value % 1 !== 0
}

export default isFloat
