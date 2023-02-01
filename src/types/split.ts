/**
 * @file Type Definitions - Split
 * @module tutils/types/Split
 */

/**
 * Creates a string array by splitting a string using the given delimiter.
 *
 * @template Str - String to split
 * @template Delimiter - String delimiter
 */
type Split<Str extends string, Delimiter extends string> = string extends Str
  ? string[]
  : Str extends ''
  ? []
  : Str extends `${infer T}${Delimiter}${infer U}`
  ? [T, ...Split<U, Delimiter>]
  : [Str]

export type { Split as default }
