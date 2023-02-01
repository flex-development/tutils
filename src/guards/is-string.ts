/**
 * @file Type Guards - isString
 * @module tutils/guards/isString
 */

/**
 * Checks if the given `value` is a string.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is string} `true` if `value` is a string
 */
const isString = (value: unknown): value is string => typeof value === 'string'

export default isString
