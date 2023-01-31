/**
 * @file Type Guards - isJwtType
 * @module tutils/guards/isJwtType
 */

import JwtType from '#src/enums/jwt-type'

/**
 * Checks if the given `value` is a valid JSON web token type.
 *
 * @param {unknown} value - Value to evaluate
 * @return {value is JwtType} `true` if `value` is {@linkcode JwtType}
 */
const isJwtType = (value: unknown): value is JwtType => {
  return Object.values(JwtType).includes(value as JwtType)
}

export default isJwtType
