/**
 * @file Utilities - isObject
 * @module tutils/utils/isObject
 */

import type { IndexSignature } from '#src/types'
import isNull from './is-null'

/**
 * Checks if `value` is a non-null object (e.g. arrays, instance objects,
 * pojos).
 *
 * @param {unknown} value - Value to check
 * @return {value is Record<IndexSignature, any>} `true` if `value` is non-null
 * object
 */
const isObject = (value: unknown): value is Record<IndexSignature, any> => {
  return typeof value === 'object' && !isNull(value)
}

export default isObject
