/**
 * @file Utilities - isObjectCurly
 * @module tutils/utils/isObjectCurly
 */

import type { ObjectCurly } from '#src/types'
import isArray from './is-array'
import isFunction from './is-function'
import isObject from './is-object'
import isObjectPlain from './is-object-plain'

/**
 * Checks if `value` is a curly-braced object.
 *
 * A curly-braced object is an object that is not an array or function (e.g.
 * instance objects, pojos).
 *
 * @see {@linkcode ObjectCurly}
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is ObjectCurly} `true` if `value` is curly-braced object
 */
const isObjectCurly = (value: unknown): value is ObjectCurly => {
  return (
    isObjectPlain(value) ||
    (!isArray(value) && !isFunction(value) && isObject(value))
  )
}

export default isObjectCurly
