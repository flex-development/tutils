/**
 * @file Type Definitions - EmptyValue
 * @module tutils/types/EmptyValue
 */

import type EmptyString from './empty-string'
import type NIL from './nil'

/**
 * Empty values union.
 *
 * Empty value types include:
 *
 * - `''`
 * - `null`
 * - `undefined`
 */
type EmptyValue = EmptyString | NIL

export type { EmptyValue as default }
