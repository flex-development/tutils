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
 * @example
 *  type X = IfEqual<{ hello: 'world' }, { hello: 'world' }, 1, 0>
 *  // 1
 * @example
 *  type X = IfEqual<{ hello: 'world' }, { hello?: 'world' }, 1, 0>
 *  // 0
 * @example
 *  type X = IfEqual<{ hello: 'world' }, { readonly hello: 'world' }, 1, 0>
 *  // 0
 *
 * @template A - First type to evaluate
 * @template B - Second type to evaluate
 * @template T - Type if `A` and `B` are equal
 * @template F - Type if `A` and `B` are not equal
 */
type IfEqual<A, B, T, F> = IsEqual<A, B> extends true ? T : F

export type { IfEqual as default }
