/**
 * @file Utilities - isNaN
 * @module tutils/utils/isNaN
 */

import equal from './equal'

/**
 * Checks if `value` is {@linkcode Number.NaN}.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {boolean} `true` if `value` is `Number.NaN`
 */
const isNaN = (value: unknown): boolean => equal(Number.NaN, value)

export default isNaN
