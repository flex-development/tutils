import { Booleanish } from '@tutils/types'

/**
 * @file Type Guards - isBooleanish
 * @module tutils/guards/isBooleanish
 */

/**
 * Checks if `value` is a {@link Booleanish}.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is a `boolean`, `'false'`, or `'true'`
 */
const isBooleanish = (value?: any): value is Booleanish => {
  return typeof value === 'boolean' || value === 'false' || value === 'true'
}

export default isBooleanish
