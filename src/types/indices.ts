/**
 * @file Type Definitions - Indices
 * @module tutils/types/Indices
 */

import type EmptyArray from './empty-array'
import type IfArray from './if-array'
import type IfTuple from './if-tuple'
import type Numeric from './numeric'

/**
 * Constructs a union of array indices.
 *
 * @example
 *  Indices<['a', 'b']>        // '0' | '1'
 *  Indices<string[]>          // number | `${number}`
 *  Indices<{ a: string[] }>   // never
 *  Indices<EmptyArray>        // never
 *
 * @template T - Type to evaluate
 */
type Indices<T> = IfArray<
  NonNullable<T>,
  unknown,
  NonNullable<T> extends EmptyArray
    ? never
    : IfTuple<
        NonNullable<T>,
        Extract<keyof NonNullable<T>, Numeric>,
        Numeric | number
      >,
  never
>

export type { Indices as default }
