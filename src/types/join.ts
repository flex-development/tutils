/**
 * @file Type Definitions - Join
 * @module tutils/types/Join
 */

import type Fallback from './fallback'
import type Joinable from './joinable'

/**
 * Joins an array of {@linkcode Joinable} items using the given `Delimiter`.
 *
 * @template A - Array to evaluate
 * @template Delimiter - String delimiter
 */
type Join<
  A extends readonly Joinable[],
  Delimiter extends string = '.'
> = A extends []
  ? ''
  : A extends readonly [Joinable?]
  ? `${Fallback<A[0], ''>}`
  : A extends readonly [
      infer Head extends Joinable,
      ...infer Tail extends readonly Joinable[]
    ]
  ? `${Fallback<Head, ''>}${Delimiter}${Join<Tail, Delimiter>}`
  : A extends readonly [
      ...infer First extends readonly Joinable[],
      infer Last extends Joinable
    ]
  ? `${Join<First, Delimiter>}${Delimiter}${Fallback<Last, ''>}`
  : string

export type { Join as default }
