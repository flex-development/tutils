/**
 * @file Type Definitions - EmptyValue
 * @module tutils/types/EmptyValue
 */

import type EmptyString from './empty-string'
import type NIL from './nil'

/**
 * Type representing `null`, `undefined`, and empty strings.
 */
type EmptyValue = EmptyString | NIL

export { type EmptyValue as default }
