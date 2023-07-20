/**
 * @file Utilities - isUndefined
 * @module tutils/utils/isUndefined
 */

import equal from './equal'

/**
 * Checks if `value` is `undefined`.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is undefined} `true` if `value` is `undefined`
 */
const isUndefined = (value: unknown): value is undefined => {
  return equal(undefined, value)
}

export default isUndefined
