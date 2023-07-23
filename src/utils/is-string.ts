/**
 * @file Utilities - isString
 * @module tutils/utils/isString
 */

/**
 * Checks if `value` is a string.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is string} `true` if `value` is a string
 */
const isString = (value: unknown): value is string => typeof value === 'string'

export default isString
