/**
 * @file Enums - JwtType
 * @module tutils/enums/JwtType
 */

/**
 * Types of JSON web tokens.
 *
 * @see https://jwt.io
 *
 * @enum {Uppercase<string>}
 */
enum JwtType {
  ACCESS = 'ACCESS',
  REFRESH = 'REFRESH',
  VERIFICATION = 'VERIFICATION'
}

export default JwtType
