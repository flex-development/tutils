/**
 * @file Type Definitions - NaturalRange
 * @module tutils/types/NaturalRange
 */

import type EmptyArray from './empty-array'

/**
 * Constructs a union of natural numbers in the range `[Acc['length'],Max)`.
 *
 * @template Max - Upper bound of range (exclusive)
 * @template Acc - Range accumulator
 */
type NaturalRange<
  Max extends number,
  Acc extends readonly number[] = EmptyArray
> = Acc['length'] extends Max
  ? Acc[number]
  : NaturalRange<Max, [...Acc, Acc['length']]>

export type { NaturalRange as default }
