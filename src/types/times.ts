/**
 * @file Type Definitions - Times
 * @module tutils/types/Times
 */

import type EmptyArray from './empty-array'
import type IsNever from './is-never'

/**
 * Construct a tuple of length `L`.
 *
 * @example
 *  type X = Times<5>
 *  // [unknown, unknown, unknown, unknown, unknown]
 * @example
 *  type X = Times<5, number>
 *  // [number, number, number, number, number]
 * @example
 *  type X = Times<number, number>
 *  // number[]
 * @example
 *  type X = Times<any, number>
 *  // number[]
 * @example
 *  type X = Times<never, number>
 *  // []
 *
 * @template L - Tuple length
 * @template V - Tuple item type
 * @template Acc - Tuple elements accumulator
 */
type Times<
  L extends number,
  V = unknown,
  Acc extends readonly unknown[] = EmptyArray
> = // dprint-ignore
  IsNever<L> extends true
  ? EmptyArray
  : number extends L
  ? V[]
  : Acc extends { length: L }
  ? Acc
  : Times<L, V, [...Acc, V]>

export type { Times as default }
