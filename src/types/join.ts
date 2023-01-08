/**
 * @file Type Definitions - Join
 * @module tutils/types/Join
 */

import type IndexSignature from './index-signature'

/**
 * Concatenates strings `String1` and `String2`.
 *
 * @template String1 - String to split
 * @template String2 - String delimiter
 * @template Delimiter - String delimiter
 */
type Join<
  String1 extends IndexSignature,
  String2 extends IndexSignature,
  Delimiter extends string = ''
> = `${String1 & string}${Delimiter}${String2 & string}`

export type { Join as default }
