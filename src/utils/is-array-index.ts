/**
 * @file Utilities - isArrayIndex
 * @module tutils/utils/isArrayIndex
 */

import type { Numeric } from '#src/types'
import isNumeric from './is-numeric'

/**
 * Checks if a value is an array index by ECMAScript Language Specification
 * standards.
 *
 * @see https://tc39.es/ecma262/#integer-index
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Numeric} `true` if `value` is array index
 */
const isArrayIndex = (value: unknown): value is Numeric => {
  /**
   * Numeric value as a number.
   *
   * @const {number} num
   */
  const num: number = isNumeric(value) ? +value : Number.NaN

  return `${num}` !== value ? false : num >= 0 && num < 0xffff_ffff
}

export default isArrayIndex
