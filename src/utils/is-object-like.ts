/**
 * @file Utilities - isObjectLike
 * @module tutils/utils/isObjectLike
 */

import type { ObjectCurly } from '#src/types'
import isNull from './is-null'

/**
 * Checks if `value` is object-like.
 *
 * A value is object-like if it has a `typeof` result of `'object'` and is not
 * `null`.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is ObjectCurly | unknown[]} `true` if `value` is object-like
 */
const isObjectLike = (value: unknown): value is ObjectCurly | unknown[] => {
  return !isNull(value) && typeof value === 'object'
}

export default isObjectLike
