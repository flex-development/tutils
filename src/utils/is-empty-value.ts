/**
 * @file Utilities - isEmptyValue
 * @module tutils/utils/isEmptyValue
 */

import type { EmptyValue } from '#src/types'
import isEmptyString from './is-empty-string'
import isNIL from './is-nil'

/**
 * Checks if the given `value` is an empty string, `null`, or `undefined`.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is EmptyValue} `true` if `value` is empty
 */
const isEmptyValue = (value: unknown): value is EmptyValue => {
  return isEmptyString(value) || isNIL(value)
}

export default isEmptyValue
