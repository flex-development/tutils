/**
 * @file Type Definitions - Split
 * @module tutils/types/Split
 */

import type EnsureString from './ensure-string'

/**
 * Splits string `S` using the given `Delimiter`.
 *
 * @template T - String to split
 * @template Delimiter - String delimiter
 */
type Split<
  T extends string,
  Delimiter extends RegExp | string | undefined
> = RegExp extends Delimiter
  ? string[]
  : T extends `${infer Head}${EnsureString<Delimiter>}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : T extends Delimiter
  ? []
  : [T]

export type { Split as default }
