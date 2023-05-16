/**
 * @file Utilities - isLowercase
 * @module tutils/utils/isLowercase
 */

import isString from './is-string'
import lowercase from './lowercase'

/**
 * Checks if `value` is a lowercase string.
 *
 * @param {unknown} value - Value to check
 * @return {value is Lowercase<string>} `true` if `value` is lowercase string
 */
const isLowercase = (value: unknown): value is Lowercase<string> => {
  return isString(value) && value === lowercase(value)
}

export default isLowercase
