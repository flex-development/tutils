/**
 * @file Utilities - isNull
 * @module tutils/utils/isNull
 */

import equal from './equal'

/**
 * Checks if `value` is `null`.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is null} `true` if `value` is `null`
 */
const isNull = (value: unknown): value is null => equal(null, value)

export default isNull
