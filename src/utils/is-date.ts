/**
 * @file Utilities - isDate
 * @module tutils/utils/isDate
 */

import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Date} instance.
 *
 * @param {unknown} value - Value to check
 * @return {value is Date} `true` if `value` is {@linkcode Date} instance
 */
function isDate(value: unknown): value is Date {
  return isObject(value) && Reflect.get(value, 'constructor') === Date
}

export default isDate
