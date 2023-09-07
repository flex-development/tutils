/**
 * @file Type Definitions - IsEqual
 * @module tutils/types/IsEqual
 */

/**
 * Returns a boolean indicating if `A` and `B` are equal.
 *
 * @see https://github.com/microsoft/TypeScript/issues/27024
 *
 * @example
 *  type X = IsEqual<true, true>
 *  // true
 * @example
 *  type X = IsEqual<3 | 13, 3 | 13>
 *  // true
 * @example
 *  type X = IsEqual<['a', 'b'?], ['a', 'b'?]>
 *  // true
 * @example
 *  type X = IsEqual<bigint['toString'], number['toString']>
 *  // true
 * @example
 *  type X = IsEqual<false, true>
 *  // false
 * @example
 *  type X = IsEqual<1 | 3, 3 | 13>
 *  // false
 * @example
 *  type X = IsEqual<['a', 'b'?], readonly ['a', 'b'?]>
 *  // false
 * @example
 *  type X = IsEqual<() => string, (n: number) => string>
 *  // false
 *
 * @template A - First type to evaluate
 * @template B - Second type to evaluate
 */
// dprint-ignore
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false

export type { IsEqual as default }
