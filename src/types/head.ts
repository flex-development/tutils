/**
 * @file Type Definitions - Head
 * @module tutils/types/Head
 */

import type IfArray from './if-array'
import type IfString from './if-string'
import type NumberString from './number-string'

/**
 * Returns the head of `T`.
 *
 * The head of `T` is:
 *
 * - `never` if `T` is not an array or string
 * - first item in `T` if `T` is an array
 * - first segment before the first delimiter if `T` is a string
 *
 * @template T - Type to evaluate
 * @template D - String delimiter
 */
type Head<T, D extends string = '.'> = T extends string | readonly unknown[]
  ? IfString<
      T,
      T extends `${infer First}${D}${NumberString}` ? First : T,
      IfArray<
        T,
        unknown,
        T extends [infer First, ...infer Rest] ? First : T[0],
        T
      >
    >
  : never

export type { Head as default }
