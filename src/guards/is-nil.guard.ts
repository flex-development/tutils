import { NIL } from '@tutils/types'

/**
 * @file Type Guards - isNIL
 * @module tutils/guards/isNIL
 */

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
