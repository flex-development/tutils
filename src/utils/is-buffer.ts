/**
 * @file Utilities - isBuffer
 * @module tutils/utils/isBuffer
 */

import type { Partial } from '#src/types'
import cast from './cast'
import isFunction from './is-function'
import isObject from './is-object'

/**
 * Checks if `value` is a {@linkcode Buffer} instance.
 *
 * @see https://nodejs.org/api/buffer.html
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Buffer} `true` if `value` is a `Buffer`
 */
const isBuffer = (value: unknown): value is Buffer => {
  if (!isObject(value)) return false

  // get possible isBuffer function from constructor
  const { isBuffer: check } = cast<Partial<typeof Buffer>>(value.constructor)

  return isFunction(check) && check(value)
}

export default isBuffer
