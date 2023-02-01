/**
 * @file Type Guards - isUndefined
 * @module tutils/guards/isUndefined
 */

/**
 * Checks if the given `value` is `undefined`.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is undefined} `true` if `value` is `undefined`
 */
const isUndefined = (value: unknown): value is undefined => value === undefined

export default isUndefined
