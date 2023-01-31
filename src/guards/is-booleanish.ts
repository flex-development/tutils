/**
 * @file Type Guards - isBooleanish
 * @module tutils/guards/isBooleanish
 */

import type { Booleanish } from '#src/types'

/**
 * Checks if the given `value` is a boolean, `'false'`, or `'true'`.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is Booleanish} `true` if `value` is {@linkcode Booleanish}
 */
const isBooleanish = (value: unknown): value is Booleanish => {
  return typeof value === 'boolean' || value === 'false' || value === 'true'
}

export default isBooleanish
