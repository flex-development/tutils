/**
 * @file Type Guards - isEmptyString
 * @module tutils/utils/isEmptyString
 */

import type { EmptyString } from '#src/types'
import isString from './is-string'

/**
 * Checks if the given `value` is an empty string.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is EmptyString} `true` if `value` is empty string
 */
const isEmptyString = (value: unknown): value is EmptyString => {
  return isString(value) ? value.trim() === '' : false
}

export default isEmptyString
