/**
 * @file Utilities - isEmptyValue
 * @module tutils/utils/isEmptyValue
 */

import type { EmptyValue } from '#src/types'
import isEmptyString from './is-empty-string'
import isNIL from './is-nil'

/**
 * Checks if `value` is an {@linkcode EmptyValue}.
 *
 * Empty values include:
 *
 * - `''`
 * - `null`
 * - `undefined`
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is EmptyValue} `true` if `value` is empty value
 */
const isEmptyValue = (value: unknown): value is EmptyValue => {
  return isEmptyString(value) || isNIL(value)
}

export default isEmptyValue
