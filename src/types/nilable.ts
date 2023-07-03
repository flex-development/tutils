/**
 * @file Type Definitions - Nilable
 * @module tutils/types/Nilable
 */

import type NIL from './nil'

/**
 * Constructs a union of {@linkcode NIL} and `T`.
 *
 * @example
 *  type X = Nilable<string>
 *  // string | null | undefined
 *
 * @template T - Type to evaluate
 */
type Nilable<T> = NIL | T

export type { Nilable as default }
