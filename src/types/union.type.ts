import type ObjectPlain from './object-plain.type'

/**
 * @file Type Definitions - Union
 * @module tutils/types/Union
 */

/**
 * Allow either type `T1` or `T2`.
 *
 * @template T1 - Object type 1
 * @template T2 - Object type 2
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types
 */
type Union<
  T1 extends ObjectPlain = ObjectPlain,
  T2 extends ObjectPlain = ObjectPlain
> = T1 & T2

export default Union
