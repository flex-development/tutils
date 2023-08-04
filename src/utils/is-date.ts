/**
 * @file Utilities - isDate
 * @module tutils/utils/isDate
 */

import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Date} instance.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Date} `true` if `value` is a `Date`
 */
const isDate = (value: unknown): value is Date => {
  return isObject(value) && value.constructor === Date
}

export default isDate
