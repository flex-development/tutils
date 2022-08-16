/**
 * @file Type Guards - isEmptyString
 * @module tutils/guards/isEmptyString
 */

import type { EmptyString } from 'src/types'

/**
 * Checks if `value` is an empty string.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is an empty string
 */
const isEmptyString = (value?: any): value is EmptyString => {
  return typeof value !== 'string' ? false : value.trim() === ''
}

export default isEmptyString
