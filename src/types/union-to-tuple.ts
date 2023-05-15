/**
 * @file Type Definitions - UnionToTuple
 * @module tutils/types/UnionToTuple
 */

import type Fn from './fn'

/**
 * Converts union type `U` to an intersection type.
 *
 * @internal
 *
 * @template U - Union type to evaluate
 */
type UnionToIntersection<U> = (
  U extends unknown ? Fn<[U], void> : never
) extends Fn<[infer I], void>
  ? I
  : never

/**
 * Convert union type `U` to a [tuple][1] type.
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @template U - Union type to evaluate
 */
type UnionToTuple<U> = UnionToIntersection<
  U extends never ? never : Fn<[U], U>
> extends Fn<[never], infer W>
  ? [...UnionToTuple<Exclude<U, W>>, W]
  : []

export type { UnionToTuple as default }
