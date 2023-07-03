/**
 * @file Type Definitions - NaturalRange
 * @module tutils/types/NaturalRange
 */

import type EmptyArray from './empty-array'

/**
 * Construct a union of natural numbers in the range `[Acc['length'],M)`.
 *
 * @example
 *  type X = NaturalRange<10>
 *  // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
 * @example
 *  type X = NaturalRange<10, [never, never, never, never, never]>
 *  // 5 | 6 | 7 | 8 | 9
 * @example
 *  type X = NaturalRange<1>
 *  // 0
 * @example
 *  type X = NaturalRange<0>
 *  // never
 * @example
 *  type X = NaturalRange<any>
 *  // never
 * @example
 *  type X = NaturalRange<never>
 *  // never
 *
 * @template M - Upper bound of range (exclusive)
 * @template Acc - Range accumulator
 */
type NaturalRange<
  M extends number,
  Acc extends readonly number[] = EmptyArray
> = M extends number
  ? Acc['length'] extends M
    ? Acc[number]
    : NaturalRange<M, [...Acc, Acc['length']]>
  : never

export type { NaturalRange as default }
