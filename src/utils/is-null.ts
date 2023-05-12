/**
 * @file Type Guards - isNull
 * @module tutils/utils/isNull
 */

/**
 * Checks if the given `value` is `null`.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is null} `true` if `value` is `null`
 */
const isNull = (value: unknown): value is null => value === null

export default isNull
