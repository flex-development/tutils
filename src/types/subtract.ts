/**
 * @file Type Definitions - Subtract
 * @module tutils/types/Subtract
 */

import type EmptyArray from './empty-array'

/**
 * Creates a tuple of length `L`.
 *
 * @internal
 *
 * @template L - Tuple size
 * @template Acc - Tuple elements accumulator
 */
type BuildTuple<
  L extends number,
  Acc extends readonly unknown[] = EmptyArray
> = Acc extends { length: L } ? Acc : BuildTuple<L, [...Acc, unknown]>

/**
 * Returns the difference between `M` and `S`.
 *
 * @internal
 *
 * @template M - Minuend
 * @template S - Subtrahend
 */
type Calculate<M extends number, S extends number> = BuildTuple<M> extends [
  ...infer U,
  ...BuildTuple<S>
]
  ? U['length']
  : never

/**
 * Returns the difference between `M` and `S`.
 *
 * @internal
 *
 * @template M - Minuend
 * @template S - Subtrahend
 */
type Subtract<M extends number, S extends number> = M extends number
  ? S extends number
    ? Calculate<M, S>
    : never
  : never

export type { Subtract as default }
