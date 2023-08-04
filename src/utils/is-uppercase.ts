/**
 * @file Utilities - isUppercase
 * @module tutils/utils/isUppercase
 */

import isString from './is-string'
import uppercase from './uppercase'

/**
 * Checks if `value` is an uppercase string.
 *
 * @todo examples
 *
 * @template T - String value
 *
 * @param {unknown} value - Value to check
 * @return {value is Uppercase<T>} `true` if `value` is uppercase string
 */
const isUppercase = <T extends string>(
  value: unknown
): value is Uppercase<T> => {
  return isString(value) && value === uppercase(value)
}

export default isUppercase
