/**
 * @file Utilities - isEmptyString
 * @module tutils/utils/isEmptyString
 */

import type { EmptyString } from '#src/types'
import equal from './equal'
import isString from './is-string'
import trim from './trim'

/**
 * Checks if `value` is an empty string.
 *
 * @param {unknown} value - Value to check
 * @return {value is EmptyString} `true` if `value` is empty string
 */
const isEmptyString = (value: unknown): value is EmptyString => {
  return isString(value) && equal(trim(value), '')
}

export default isEmptyString
