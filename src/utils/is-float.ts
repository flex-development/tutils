/**
 * @file Utilities - isFloat
 * @module tutils/utils/isFloat
 */

import type { Float } from '#src/types'
import equal from './equal'
import isNumber from './is-number'

/**
 * Checks if `value` is a floating point number.
 *
 * @see {@linkcode Float}
 *
 * @param {unknown} value - Value to check
 * @return {value is Float} `true` if `value` is a float
 */
function isFloat(value: unknown): value is Float {
  return isNumber(value) && !equal(value % 1, 0)
}

export default isFloat
