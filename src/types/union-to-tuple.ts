/**
 * @file Type Definitions - UnionToTuple
 * @module tutils/types/UnionToTuple
 */

import type Fn from './fn'
import type UnionToIntersection from './union-to-intersection'

/**
 * Converts `U` to a [tuple][1] type.
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @template U - Type to evaluate
 */
type UnionToTuple<U> = UnionToIntersection<
  U extends never ? never : Fn<[U], U>
> extends Fn<[never], infer W>
  ? [...UnionToTuple<Exclude<U, W>>, W]
  : []

export type { UnionToTuple as default }
