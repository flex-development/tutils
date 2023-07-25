/**
 * @file Utilities - isNumeric
 * @module tutils/utils/isNumeric
 */

import type { Numeric } from '#src/types'
import isNumber from './is-number'
import isString from './is-string'

/**
 * Checks if `value` is a {@linkcode Numeric}.
 *
 * A numeric is a string containing only numbers (not including the leading `-`
 * if negative).
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Numeric} `true` if `value` is a numeric
 */
const isNumeric = (value: unknown): value is Numeric => {
  return isString(value) && isNumber(+value)
}

export default isNumeric
