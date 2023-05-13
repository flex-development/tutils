/**
 * @file Utilities - isNIL
 * @module tutils/utils/isNIL
 */

import type { NIL } from '#src/types'
import isNull from './is-null'
import isUndefined from './is-undefined'

/**
 * Checks if the given `value` is `null` or `undefined`.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is NIL} `true` if `value` is {@linkcode NIL}
 */
const isNIL = (value: unknown): value is NIL => {
  return isNull(value) || isUndefined(value)
}

export default isNIL
