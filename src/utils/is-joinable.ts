/**
 * @file Utilities - isJoinable
 * @module tutils/utils/isJoinable
 */

import type { Joinable } from '#src/types'
import isBigInt from './is-big-int'
import isJsonPrimitive from './is-json-primitive'
import isUndefined from './is-undefined'

/**
 * Checks if `value` is joinable.
 *
 * @see {@linkcode Joinable}
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Joinable} `true` if `value` is joinable
 */
const isJoinable = (value: unknown): value is Joinable => {
  return isBigInt(value) || isJsonPrimitive(value) || isUndefined(value)
}

export default isJoinable
