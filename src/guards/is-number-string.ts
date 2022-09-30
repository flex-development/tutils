/**
 * @file Type Guards - isNumberString
 * @module tutils/guards/isNumberString
 */

import type { NumberString } from '#src/types'

/**
 * Checks if `value` is a `number` or `string`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is a `number` or `string`
 */
const isNumberString = (value?: any): value is NumberString => {
  return typeof value === 'number' || typeof value === 'string'
}

export default isNumberString
