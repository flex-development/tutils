/**
 * @file Type Guards - isBoolean
 * @module tutils/guards/isBoolean
 */

/**
 * Checks if the given `value` is a boolean.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is boolean} `true` if `value` is a boolean
 */
const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

export default isBoolean
