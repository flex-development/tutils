/**
 * @file Utilities - isURL
 * @module tutils/utils/isURL
 */

import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode URL} instance.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is URL} `true` if `value` is a `URL`
 */
const isURL = (value: unknown): value is URL => {
  return isObject(value) && value.constructor === URL
}

export default isURL
