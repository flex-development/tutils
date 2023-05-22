/**
 * @file Type Definitions - At
 * @module tutils/types/At
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type IfTuple from './if-tuple'
import type NumberString from './number-string'
import type Numeric from './numeric'
import type Split from './split'
import type TupleLength from './tuple-length'

/**
 * Constructs a union of numbers in the range `[0,Max)`.
 *
 * @internal
 *
 * @template Max - Upper bound of range (exclusive)
 * @template Acc - Accumulator
 */
type Enumerate<
  Max extends number,
  Acc extends readonly number[] = EmptyArray
> = Acc['length'] extends Max
  ? Acc[number]
  : Enumerate<Max, [...Acc, Acc['length']]>

/**
 * Constructs a union of numerics in the range `[-1 * Max, Max)`.
 *
 * @internal
 *
 * @template Max - Upper bound of range (exclusive)
 */
type Range<Max extends number> =
  | Exclude<`-${Exclude<Enumerate<Max>, Enumerate<0>>}`, `-${0}`>
  | `-${Max}`
  | `${Exclude<Enumerate<Max>, Enumerate<0>>}`

/**
 * Indexes `T` at `K`.
 *
 * Partially supports negative indices.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/at
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/at
 *
 * @template T - Type to evaluate
 * @template K - Index
 * @template F - Fallback value
 */
type At<
  T extends string | readonly unknown[],
  K extends NumberString,
  F = undefined
> = NonNullable<T> extends EmptyArray | EmptyString
  ? F
  : K extends Numeric | number
  ? NonNullable<T> extends string
    ? [string] extends [NonNullable<T>]
      ? F | T[number]
      : Split<NonNullable<T>, ''> extends infer B
      ? `${K}` extends Range<TupleLength<B>>
        ? B[K & keyof B]
        : F
      : F
    : IfTuple<
        NonNullable<T>,
        `${K}` extends Range<TupleLength<NonNullable<T>>> ? T[K & keyof T] : F,
        F | T[number]
      >
  : F

export type { At as default }
