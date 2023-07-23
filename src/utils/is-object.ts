/**
 * @file Utilities - isObject
 * @module tutils/utils/isObject
 */

import type { ObjectCurly } from '#src/types'
import isNull from './is-null'

/**
 * Checks if `value` is an object (e.g. arrays, instance objects, pojos).
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is ObjectCurly | unknown[]} `true` if `value` is an object
 */
const isObject = (value: unknown): value is ObjectCurly | unknown[] => {
  return typeof value === 'object' && !isNull(value)
}

export default isObject
