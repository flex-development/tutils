/**
 * @file Utilities - isRegExp
 * @module tutils/utils/isRegExp
 */

import equal from './equal'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode RegExp} instance.
 *
 * @param {unknown} value - Value to check
 * @return {value is RegExp} `true` if `value` is {@linkcode RegExp} instance
 */
function isRegExp(value: unknown): value is RegExp {
  return isObject(value) && equal(Reflect.get(value, 'constructor'), RegExp)
}

export default isRegExp
