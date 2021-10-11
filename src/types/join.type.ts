import type IndexSignature from './index-signature.type'

/**
 * @file Type Definitions - Join
 * @module tutils/types/Join
 */

/**
 * Constructs a string array by concatenating string `S` and `S1`.
 *
 * @template S - String to split
 * @template S2 - String delimiter
 * @template D - String delimiter
 */
type Join<
  S extends IndexSignature,
  S1 extends IndexSignature,
  D extends string = ''
> = `${S & string}${D}${S1 & string}`

export default Join