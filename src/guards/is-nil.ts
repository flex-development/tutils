/**
 * @file Type Guards - isNIL
 * @module tutils/guards/isNIL
 */

import type { NIL } from '#src/types'

/**
 * Checks if the given `value` is `null` or `undefined`.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is NIL} `true` if `value` is {@linkcode NIL}
 */
const isNIL = (value: unknown): value is NIL => {
  return value === null || value === undefined
}

export default isNIL
