/**
 * @file Type Guards - isEmptyString
 * @module tutils/guards/isEmptyString
 */

import type { EmptyString } from '#src/types'

/**
 * Checks if the given `value` is an empty string.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is EmptyString} `true` if `value` is empty string
 */
const isEmptyString = (value: unknown): value is EmptyString => {
  return typeof value !== 'string' ? false : value.trim() === ''
}

export default isEmptyString
