/**
 * @file Utilities - isUppercase
 * @module tutils/utils/isUppercase
 */

import isString from './is-string'
import uppercase from './uppercase'

/**
 * Checks if `value` is an uppercase string.
 *
 * @param {unknown} value - Value to check
 * @return {value is Uppercase<string>} `true` if `value` is uppercase string
 */
const isUppercase = (value: unknown): value is Uppercase<string> => {
  return isString(value) && value === uppercase(value)
}

export default isUppercase
