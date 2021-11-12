import type NIL from './nil.type'

/**
 * @file Type Definitions - OrNil
 * @module tutils/types/OrNil
 */

/**
 * Type representing a value that also be `NIL`.
 *
 * @template T - Value type
 */
type OrNil<T> = T | NIL

export default OrNil
