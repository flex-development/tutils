/**
 * @file Type Definitions - Indices
 * @module tutils/types/Indices
 */

import type IfArray from './if-array'
import type IfTuple from './if-tuple'
import type Numeric from './numeric'

/**
 * Constructs a union type of array indices.
 *
 * @example
 *  type Example = { a: string[] }
 *  Indices<['a', 'b']>    // '0' | '1'
 *  Indices<Example['a']>  // number | `${number}`
 *  Indices<Example>       // never
 *
 * @template T - Type to evaluate
 */
type Indices<T> = IfArray<
  T,
  unknown,
  IfTuple<T, Extract<keyof T, Numeric>, Numeric | number>,
  never
>

export type { Indices as default }
