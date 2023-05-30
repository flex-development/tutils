/**
 * @file Type Definitions - IfEqual
 * @module tutils/types/IfEqual
 */

import type IsEqual from './is-equal'

/**
 * Returns a type that indicates if `A` and `B` are equal.
 *
 * @see {@linkcode IsEqual}
 *
 * @template A - First type to evaluate
 * @template B - Second type to evaluate
 * @template True - Type if `A` and `B` are equal
 * @template False - Type if `A` and `B` are not equal
 */
type IfEqual<A, B, True, False> = IsEqual<A, B> extends true ? True : False

export type { IfEqual as default }
