/**
 * @file Utilities - isBooleanish
 * @module tutils/utils/isBooleanish
 */

import type { Booleanish } from '#src/types'
import includes from './includes'
import isBoolean from './is-boolean'

/**
 * Checks if `value` is {@linkcode Booleanish}.
 *
 * @todo examples
 *
 * @param {unknown} value - Value to check
 * @return {value is Booleanish} `true` if `value` is `Booleanish`
 */
const isBooleanish = (value: unknown): value is Booleanish => {
  return (
    isBoolean(value) ||
    includes([0, 1, '0', '1', 'false', 'n', 'true', 'y'], value)
  )
}

export default isBooleanish
