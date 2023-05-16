/**
 * @file Utilities - isObjectAny
 * @module tutils/utils/isObjectAny
 */

import type { ObjectAny } from '#src/types'
import isArray from './is-array'
import isObject from './is-object'
import isObjectPlain from './is-object-plain'

/**
 * Checks if `value` is a non-null object that is not an array (e.g. instance
 * objects, pojos).
 *
 * @see {@linkcode ObjectAny}
 *
 * @param {unknown} value - Value to check
 * @return {value is ObjectAny} `true` if `value` is pojo or instance object
 */
const isObjectAny = (value: unknown): value is ObjectAny => {
  return isObjectPlain(value) || (isObject(value) && !isArray(value))
}

export default isObjectAny
