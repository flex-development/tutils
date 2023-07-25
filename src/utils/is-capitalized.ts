/**
 * @file Utilities - isCapitalized
 * @module tutils/utils/isCapitalized
 */

import isEmptyString from './is-empty-string'
import isString from './is-string'
import uppercase from './uppercase'

/**
 * Checks if `value` is a capitalized string.
 *
 * A capitalized string one where the first character is uppercase.
 *
 * @todo examples
 *
 * @template T - Capitalized string
 *
 * @param {unknown} value - Value to check
 * @return {value is Capitalize<T>} `true` if `value` is capitalized string
 */
const isCapitalized = <T extends string>(
  value: unknown
): value is Capitalize<T> => {
  return (
    isEmptyString(value) ||
    (isString(value) && value.startsWith(uppercase(value.charAt(0))))
  )
}

export default isCapitalized
