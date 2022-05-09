/**
 * @file Type Guards - isNIL
 * @module tutils/guards/isNIL
 */

import type { NIL } from '@tutils/types'

/**
 * Checks if `value` is a {@link NIL}.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is `null` or `undefined`
 */
const isNIL = (value?: any): value is NIL => {
  return value === null || value === undefined
}

export default isNIL
