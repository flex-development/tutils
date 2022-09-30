/**
 * @file Type Definitions - Nilable
 * @module tutils/types/Nilable
 */

import type NIL from './nil'

/**
 * Type representing a value that also be `NIL`.
 *
 * @template T - Value type
 */
type Nilable<T> = NIL | T

export { type Nilable as default }
