/**
 * @file Type Definitions - Join
 * @module tutils/types/Join
 */

/**
 * Concatenates an array of strings and/or numbers using the given delimiter.
 *
 * @template Arr - Array to concatenate
 * @template Delimiter - String delimiter
 */
type Join<
  Arr extends readonly (number | string)[],
  Delimiter extends string = ''
> = Arr extends []
  ? ''
  : Arr extends [number | string]
  ? `${Arr[0]}`
  : Arr extends readonly [
      number | string,
      ...infer Rest extends (number | string)[]
    ]
  ? `${Arr[0]}${Delimiter}${Join<Rest, Delimiter>}`
  : string

export type { Join as default }
