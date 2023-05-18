/**
 * @file Utilities - isUppercase
 * @module tutils/utils/isUppercase
 */

import equal from './equal'
import isString from './is-string'
import uppercase from './uppercase'

/**
 * Checks if `value` is an uppercase string.
 *
 * @template T - Uppercase string
 *
 * @param {unknown} value - Value to check
 * @return {value is Uppercase<T>} `true` if `value` is uppercase string
 */
function isUppercase<T extends string>(value: unknown): value is Uppercase<T> {
  return isString(value) && equal(value, uppercase(value))
}

export default isUppercase
