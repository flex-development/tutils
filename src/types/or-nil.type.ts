/**
 * @file Type Definitions - OrNil
 * @module tutils/types/OrNil
 */

import type NIL from './nil.type'

/**
 * Type representing a value that also be `NIL`.
 *
 * @template T - Value type
 */
type OrNil<T> = NIL | T

export default OrNil
