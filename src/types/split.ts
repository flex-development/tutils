/**
 * @file Type Definitions - Split
 * @module tutils/types/Split
 */

import type EmptyArray from './empty-array'
import type EmptyString from './empty-string'
import type EnsureString from './ensure-string'

/**
 * Splits string `S` using the given `Delimiter`.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * @template T - String to split
 * @template Delimiter - String delimiter
 */
type Split<
  T extends string,
  Delimiter extends RegExp | string | undefined = undefined
> = RegExp extends Delimiter
  ? T extends EmptyString
    ? EmptyArray
    : string[]
  : T extends `${infer Head}${EnsureString<Delimiter>}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : T extends Delimiter
  ? EmptyArray
  : [T]

export type { Split as default }
