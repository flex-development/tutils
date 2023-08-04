/**
 * @file Utilities - isDataView
 * @module tutils/utils/isDataView
 */

import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode DataView} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/DataView
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is DataView} `true` if `value` is a `DataView`
 */
const isDataView = (value: unknown): value is DataView => {
  return isObject(value) && value.constructor === DataView
}

export default isDataView
