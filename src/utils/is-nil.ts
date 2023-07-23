/**
 * @file Utilities - isNIL
 * @module tutils/utils/isNIL
 */

import type { NIL } from '#src/types'
import isNull from './is-null'
import isUndefined from './is-undefined'

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @see {@linkcode NIL}
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is NIL} `true` if `value` is `NIL`
 */
const isNIL = (value: unknown): value is NIL => {
  return isNull(value) || isUndefined(value)
}

export default isNIL
