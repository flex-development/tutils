import { EmptyValue } from '@tutils/types'
import isEmptyString from './is-empty-string.guard'
import isNIL from './is-nil.guard'

/**
 * @file Type Guards - isEmptyValue
 * @module tutils/guards/isEmptyValue
 */

/**
 * Checks if `value` is an empty string or `NIL`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is empty string, `null`, or `undefined`
 */
const isEmptyValue = (value?: any): value is EmptyValue => {
  return isEmptyString(value) || isNIL(value)
}

export default isEmptyValue
