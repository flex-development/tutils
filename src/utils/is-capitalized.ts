/**
 * @file Utilities - isCapitalized
 * @module tutils/utils/isCapitalized
 */

import at from './at'
import cast from './cast'
import isString from './is-string'
import trim from './trim'
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
    isString(value) &&
    (value = trim(value)).startsWith(uppercase(at(cast<string>(value), 0, '')))
  )
}

export default isCapitalized
