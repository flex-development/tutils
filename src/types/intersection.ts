/**
 * @file Type Definitions - Intersection
 * @module tutils/types/Intersection
 */

import type IfEqual from './if-equal'

/**
 * Returns the intersection of `T` and `U`.
 *
 * @example
 *  type X = Intersection<-1 | -2 | -3 | 0 | 1 | 2, -3 | 0>
 *  // -3 | 0
 * @example
 *  type X = Intersection<number | 'data', 3>
 *  // never
 *
 * @template T - First type to evaluate
 * @template U - Second type to evaluate
 */
type Intersection<T, U> = T extends unknown
  ? U extends unknown
    ? IfEqual<T, U, T, never>
    : never
  : never

export type { Intersection as default }
