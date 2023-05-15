/**
 * @file Type Definitions - Tail
 * @module tutils/types/Tail
 */

import type IfArray from './if-array'
import type IfString from './if-string'
import type NumberString from './number-string'

/**
 * Returns the tail of `T`.
 *
 * The tail of `T` is:
 *
 * - `never` if `T` is not an array or string
 * - all items in `T` after the first if `T` is an array
 * - all segments after the first delimiter in `T` if `T` is a string
 *
 * @template T - Path to evaluate
 * @template D - String delimiter
 */
type Tail<T, D extends string = '.'> = T extends string | readonly unknown[]
  ? IfString<
      T,
      T extends `${NumberString}${D}${infer Last}` ? Last : T,
      IfArray<
        T,
        unknown,
        T extends [infer Elements, ...infer Last] ? Last : T,
        T
      >
    >
  : never

export type { Tail as default }
