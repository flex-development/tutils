/**
 * @file Utilities - isObjectCurly
 * @module tutils/utils/isObjectCurly
 */

import type { ObjectCurly } from '#src/types'
import isArray from './is-array'
import isObjectLike from './is-object-like'

/**
 * Checks if `value` is a curly-braced object.
 *
 * A curly-braced object is an object-like value that is not an array.
 *
 * @see {@linkcode ObjectCurly}
 * @see {@linkcode isObjectLike}
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is ObjectCurly} `true` if `value` is curly-braced object
 */
const isObjectCurly = (value: unknown): value is ObjectCurly => {
  return !isArray(value) && isObjectLike(value)
}

export default isObjectCurly
