/**
 * @file Type Definitions - Split
 * @module tutils/types/Split
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type IfAny from './if-any'
import type IfNever from './if-never'
import type Optional from './optional'
import type Stringify from './stringify'

/**
 * Converts string `T` to an array of substrings.
 *
 * @todo examples
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * @template T - String to split
 * @template S - String separator
 * @template Acc - Substring accumulator
 */
type Split<
  T extends string,
  S extends Optional<RegExp | string> = undefined,
  Acc extends readonly string[] = EmptyArray
> = IfAny<
  T,
  string[],
  IfNever<
    T,
    EmptyArray,
    T extends object
      ? S extends undefined
        ? [T]
        : string[]
      : T extends `${infer H}${Stringify<S>}${infer R}`
      ? Split<R, S, [...Acc, H]>
      : [...Acc, T] extends infer R
      ? T extends EmptyString
        ? S extends EmptyString
          ? Acc
          : R
        : Capitalize<string> extends T
        ? S extends undefined
          ? R
          : string[]
        : Lowercase<string> extends T
        ? S extends undefined
          ? R
          : Lowercase<string>[]
        : Uncapitalize<string> extends T
        ? S extends undefined
          ? R
          : string[]
        : Uppercase<string> extends T
        ? S extends undefined
          ? R
          : Uppercase<string>[]
        : S extends RegExp
        ? string[]
        : string extends S
        ? string[]
        : R
      : Acc
  >
>

export type { Split as default }
