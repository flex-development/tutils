/**
 * @file Type Definitions - EmptyValue
 * @module tutils/types/EmptyValue
 */

import type EmptyString from './empty-string.type'
import type NIL from './nil.type'

/**
 * Type representing `null`, `undefined`, and empty strings.
 */
type EmptyValue = EmptyString | NIL

export default EmptyValue
