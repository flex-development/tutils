/**
 * @file Type Guards - isBooleanish
 * @module tutils/guards/isBooleanish
 */

import type { Booleanish } from 'src/types'

/**
 * Checks if `value` is {@link Booleanish}.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is a `boolean`, `'false'`, or `'true'`
 */
const isBooleanish = (value?: any): value is Booleanish => {
  return typeof value === 'boolean' || value === 'false' || value === 'true'
}

export default isBooleanish
