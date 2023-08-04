/**
 * @file Utilities - isObject
 * @module tutils/utils/isObject
 */

import type { Objectify } from '#src/types'
import isFunction from './is-function'
import isNull from './is-null'

/**
 * Checks if `value` is an object.
 *
 * Object types include:
 *
 * - arrays
 * - functions
 * - instance objects
 * - plain objects (pojos)
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Objectify<any>} `true` if `value` is an object
 */
const isObject = (value: unknown): value is Objectify<any> => {
  return isFunction(value) || (typeof value === 'object' && !isNull(value))
}

export default isObject
