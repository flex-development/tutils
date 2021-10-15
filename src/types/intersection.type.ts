import type ObjectPlain from './object-plain.type'

/**
 * @file Type Definitions - Intersection
 * @module tutils/types/Intersection
 */

/**
 * Combine two types.
 *
 * @template T1 - Object type 1
 * @template T2 - Object type 2
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 */
type Intersection<
  T1 extends ObjectPlain = ObjectPlain,
  T2 extends ObjectPlain = ObjectPlain
> = T1 & T2

export default Intersection
