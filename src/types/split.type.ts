/**
 * @file Type Definitions - Split
 * @module tutils/types/Split
 */

/**
 * Constructs a string array by splitting string `S` using delimiter `D`.
 *
 * @template S - String to split
 * @template D - String delimiter
 */
type Split<S extends string, D extends string> = string extends S ? string[]
  : S extends '' ? []
  : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>]
  : [S]

export default Split
