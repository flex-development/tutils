/**
 * @file Type Definitions - Tail
 * @module tutils/types/Tail
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type IfAny from './if-any'
import type Join from './join'

/**
 * Returns the tail of `T`.
 *
 * The tail of `T` is:
 *
 * - `never` if `T` is not an array or string
 * - all items in `T` after the first if `T` is an array
 * - all segments after the first delimiter in `T` if `T` is a string
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template D - String delimiter
 */
type Tail<
  T extends string | readonly unknown[],
  D extends string = EmptyString
> = IfAny<
  T,
  never,
  T extends string
    ? T extends Join<[string, D, infer R extends string], EmptyString>
      ? R
      : T
    : T extends Readonly<EmptyArray>
    ? T
    : T extends readonly [T[0]?, ...infer R extends T[number][]]
    ? R
    : T
>

export type { Tail as default }
