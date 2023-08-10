/**
 * @file Utilities - isNaN
 * @module tutils/utils/isNaN
 */

import isNumber from './is-number'

/**
 * Checks if `value` is {@linkcode Number.NaN}.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {boolean} `true` if `value` is `Number.NaN`
 */
const isNaN = (value: unknown): boolean => isNumber(value) && value !== +value

export default isNaN
