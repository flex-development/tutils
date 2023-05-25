/**
 * @file Utilities - isNumber
 * @module tutils/utils/isNumber
 */

/**
 * Checks if `value` is a number.
 *
 * @param {unknown} value - Value to check
 * @return {value is number} `true` if `value` is a number
 */
const isNumber = (value: unknown): value is number => {
  try {
    return Number(value) === value
  } catch {
    return false
  }
}

export default isNumber
