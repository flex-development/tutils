/**
 * @file Type Guards - isNumber
 * @module tutils/guards/isNumber
 */

/**
 * Checks if the given `value` is a number.
 *
 * @param {unknown} value - Value to evaluate
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
