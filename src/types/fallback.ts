/**
 * @file Type Definitions - Fallback
 * @module tutils/types/Fallback
 */

import type NIL from './nil'

/**
 * Fallback value helper.
 *
 * Resolves to `Exclude<T, Condition> | F` if `T` extends `Condition`, or `T`
 * otherwise.
 *
 * @template T - Value to evaluate
 * @template F - Fallback value type
 * @template Condition - Fallback condition
 */
type Fallback<T, F, Condition = NIL> = T extends Condition
  ? Exclude<T, Condition> | F
  : T

export type { Fallback as default }
