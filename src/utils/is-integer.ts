/**
 * @file Utilities - isInteger
 * @module tutils/utils/isInteger
 */

import type { Integer } from '#src/types'
import isNumber from './is-number'

/**
 * Checks if `value` is an integer.
 *
 * @see {@linkcode Integer}
 *
 * @param {unknown} value - Value to check
 * @return {value is Integer} `true` if `value` is an integer
 */
function isInteger(value: unknown): value is Integer {
  return isNumber(value) && value % 1 === 0
}

export default isInteger
