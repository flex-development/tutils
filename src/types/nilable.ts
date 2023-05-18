/**
 * @file Type Definitions - Nilable
 * @module tutils/types/Nilable
 */

import type NIL from './nil'

/**
 * Constructs a union type of {@linkcode NIL} and `T`.
 *
 * @template T - Value type
 */
type Nilable<T> = NIL | T

export type { Nilable as default }
