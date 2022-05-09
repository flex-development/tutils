/**
 * @file Type Guards - isJwtType
 * @module tutils/guards/isJwtType
 */

import JwtType from '@tutils/enums/jwt-type.enum'

/**
 * Checks if `value` is a {@link JwtType}.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is valid jwt type
 */
const isJwtType = (value?: any): value is JwtType => {
  if (typeof value !== 'string') return false
  return Object.values(JwtType).includes(value as JwtType)
}

export default isJwtType
