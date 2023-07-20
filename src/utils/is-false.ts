/**
 * @file Utilities - isFalse
 * @module tutils/utils/isFalse
 */

import equal from './equal'

/**
 * Checks if `value` is `false`.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is false} `true` if `value` is `false`
 */
const isFalse = (value: unknown): value is false => equal(false, value)

export default isFalse
