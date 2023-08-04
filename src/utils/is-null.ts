/**
 * @file Utilities - isNull
 * @module tutils/utils/isNull
 */

/**
 * Checks if `value` is `null`.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is null} `true` if `value` is `null`
 */
const isNull = (value: unknown): value is null => value === null

export default isNull
