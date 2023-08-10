/**
 * @file Utilities - isObject
 * @module tutils/utils/isObject
 */

import type { Objectify } from '#src/types'
import isFunction from './is-function'
import isObjectLike from './is-object-like'

/**
 * Checks if `value` is a [language type][1] `Object`.
 *
 * Object types include:
 *
 * - arrays
 * - functions
 * - instance objects
 * - plain objects (pojos)
 *
 * [1]: http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Objectify<any>} `true` if `value` is an object
 */
const isObject = (value: unknown): value is Objectify<any> => {
  return isFunction(value) || isObjectLike(value)
}

export default isObject
