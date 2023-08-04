/**
 * @file Utilities - isUndefined
 * @module tutils/utils/isUndefined
 */

/**
 * Checks if `value` is `undefined`.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is undefined} `true` if `value` is `undefined`
 */
const isUndefined = (value: unknown): value is undefined => value === void 0

export default isUndefined
