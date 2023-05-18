/**
 * @file Utilities - isBooleanish
 * @module tutils/utils/isBooleanish
 */

import type { Booleanish } from '#src/types'
import includes from './includes'
import isBoolean from './is-boolean'

/**
 * Checks if `value` is a boolean, `'false'`, or `'true'`.
 *
 * @param {unknown} value - Value to check
 * @return {value is Booleanish} `true` if `value` is {@linkcode Booleanish}
 */
const isBooleanish = (value: unknown): value is Booleanish => {
  return isBoolean(value) || includes(['false', 'true'], value)
}

export default isBooleanish
