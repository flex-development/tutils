/**
 * @file Utilities - isNaN
 * @module tutils/utils/isNaN
 */

import type { NaN } from '#src/types'
import isNumber from './is-number'

/**
 * Checks if `value` is {@linkcode Number.NaN}.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is NaN} `true` if `value` is `Number.NaN`
 */
const isNaN = (value: unknown): value is NaN => {
  return isNumber(value) && value !== +value
}

export default isNaN
