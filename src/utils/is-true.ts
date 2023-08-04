/**
 * @file Utilities - isTrue
 * @module tutils/utils/isTrue
 */

/**
 * Checks if `value` is `true`.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is true} `true` if `value` is `true`
 */
const isTrue = (value: unknown): value is true => value === true

export default isTrue
