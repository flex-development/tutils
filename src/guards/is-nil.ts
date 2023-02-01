/**
 * @file Type Guards - isNIL
 * @module tutils/guards/isNIL
 */

import type { NIL } from '#src/types'
import isNull from './is-null'

/**
 * Checks if the given `value` is `null` or `undefined`.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is NIL} `true` if `value` is {@linkcode NIL}
 */
const isNIL = (value: unknown): value is NIL => {
  return isNull(value) || value === undefined
}

export default isNIL
