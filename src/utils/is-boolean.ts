/**
 * @file Utilities - isBoolean
 * @module tutils/utils/isBoolean
 */

/**
 * Checks if `value` is a boolean.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is boolean} `true` if `value` is a boolean
 */
const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

export default isBoolean
