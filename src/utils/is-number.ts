/**
 * @file Utilities - isNumber
 * @module tutils/utils/isNumber
 */

/**
 * Checks if `value` is a number.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is number} `true` if `value` is a number
 */
const isNumber = (value: unknown): value is number => typeof value === 'number'

export default isNumber
