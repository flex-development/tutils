import type EmptyString from './empty-string.type'
import type NIL from './nil.type'

/**
 * @file Type Definitions - EmptyValue
 * @module tutils/types/EmptyValue
 */

/**
 * Type representing `null`, `undefined`, and empty strings.
 */
type EmptyValue = NIL | EmptyString

export default EmptyValue
