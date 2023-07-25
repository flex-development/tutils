/**
 * @file Utilities - isRegExp
 * @module tutils/utils/isRegExp
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode RegExp} instance.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is RegExp} `true` if `value` is a regular expression
 */
const isRegExp = (value: unknown): value is RegExp => {
  return isObject(value) && equal(RegExp, value.constructor)
}

export default isRegExp
