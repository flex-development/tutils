/**
 * @file Type Guards - isJwtType
 * @module tutils/guards/isJwtType
 */

import JwtType from 'src/enums/jwt-type'

/**
 * Checks if `value` is a {@link JwtType}.
 *
 * @param {any} [value] - Value to check
 * @return {boolean} `true` if `value` is valid jwt type
 */
const isJwtType = (value?: any): value is JwtType => {
  return Object.values(JwtType).includes(value as JwtType)
}

export default isJwtType
