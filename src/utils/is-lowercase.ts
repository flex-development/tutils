/**
 * @file Utilities - isLowercase
 * @module tutils/utils/isLowercase
 */

import equal from './equal'
import isString from './is-string'
import lowercase from './lowercase'

/**
 * Checks if `value` is a lowercase string.
 *
 * @template T - Lowercase string
 *
 * @param {unknown} value - Value to check
 * @return {value is Lowercase<T>} `true` if `value` is lowercase string
 */
function isLowercase<T extends string>(value: unknown): value is Lowercase<T> {
  return isString(value) && equal(value, lowercase(value))
}

export default isLowercase
