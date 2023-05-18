/**
 * @file Utilities - isUndefined
 * @module tutils/utils/isUndefined
 */

import equal from './equal'

/**
 * Checks if `value` is `undefined`.
 *
 * @param {unknown} value - Value to check
 * @return {value is undefined} `true` if `value` is `undefined`
 */
const isUndefined = (value: unknown): value is undefined => {
  return equal(value, undefined)
}

export default isUndefined
