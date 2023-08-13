/**
 * @file Type Definitions - ArrayFallback
 * @module tutils/types/ArrayFallback
 */

import type EmptyArray from './empty-array'
import type Fallback from './fallback'
import type NIL from './nil'

/**
 * Fallback to an array type if `T` extends {@linkcode NIL}.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template [F=EmptyArray] - Fallback array type
 */
type ArrayFallback<T, F extends readonly unknown[] = EmptyArray> = Fallback<
  T,
  F,
  NIL
>

export type { ArrayFallback as default }
