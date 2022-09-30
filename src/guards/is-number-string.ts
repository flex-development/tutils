/**
 * @file Type Guards - isNumberString
 * @module tutils/guards/isNumberString
 */

/**
 * Checks if `value` is a `number` or `string`.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is a `number` or `string`
 */
const isNumberString = (value?: any): value is number | string => {
  return typeof value === 'number' || typeof value === 'string'
}

export default isNumberString
