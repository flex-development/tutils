/**
 * @file Type Definitions - Indices
 * @module tutils/types/Indices
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type Length from './length'
import type NaturalRange from './range-natural'
import type Subtract from './subtract'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Constructs a union of indices.
 *
 * **Note**: Includes negative indices.
 *
 * @example
 *  type X = Indices<['a', 'b', 'c'?]>
 *  // -1 | -2 | -3 | 0 | 1 | 2
 * @example
 *  type X = Indices<'abc'>
 *  // -1 | -2 | -3 | 0 | 1 | 2
 * @example
 *  type X = Indices<string[]>
 *  // number
 * @example
 *  type X = Indices<string>
 *  // number
 * @example
 *  type X = Indices<any>
 *  // number
 * @example
 *  type X = Indices<never>
 *  // never
 * @example
 *  type X = Indices<EmptyString>
 *  // never
 * @example
 *  type X = Indices<Readonly<EmptyArray>>
 *  // never
 *
 * @template T - Type to evaluate
 */
type Indices<T extends { length: number }> =
  // dprint-ignore
  T extends  EmptyString | Readonly<EmptyArray>
  ? never
  : Length<T> extends infer L extends number
  ? number extends L
    ? L
    : NaturalRange<L> extends infer R extends number
    ? {
        [K in R]:
          | K
          | UnwrapNumeric<Exclude<`-${Subtract<Length<Required<T>>, K>}`, '-0'>>
      }[R] extends infer I extends number
      ? I
      : never
    : never
  : never

export type { Indices as default }
