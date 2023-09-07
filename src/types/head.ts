/**
 * @file Type Definitions - Head
 * @module tutils/types/Head
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type IfAny from './if-any'
import type Join from './join'
import type Optional from './optional'

/**
 * Returns the head of `T`.
 *
 * The head of `T` is:
 *
 * - `never` if `T` is not an array or string
 * - first item in `T` if `T` is an array
 * - first segment in `T` if `T` is a string
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template D - String delimiter
 */
type Head<
  T extends string | readonly unknown[],
  D extends string = EmptyString
> = IfAny<
  T,
  never,
  // dprint-ignore
  T extends string
    ? T extends EmptyString
      ? never
      : T extends Join<[infer H extends string, D, string], EmptyString>
      ? H
      : T
    : T extends Readonly<EmptyArray>
    ? never
    : T extends readonly [infer H extends T[0], ...T[number][]]
    ? H
    : T extends readonly [(infer H extends T[0])?, ...T[number][]]
    ? Optional<H>
    : never
>

export type { Head as default }
