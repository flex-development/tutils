/**
 * @file Type Guards - isNumeric
 * @module tutils/utils/isNumeric
 */

import type { Numeric } from '#src/types'
import isNumber from './is-number'
import isString from './is-string'

/**
 * Checks if the given `value` is a numeric.
 *
 * A numeric is a string that contains only numbers.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is Numeric} `true` if `value` is a {@linkcode Numeric}
 */
const isNumeric = (value: unknown): value is Numeric => {
  return isString(value) && isNumber(+value)
}

export default isNumeric
