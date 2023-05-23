/**
 * @file Type Definitions - UnionToIntersection
 * @module tutils/types/UnionToIntersection
 */

import type Fn from './fn'

/**
 * Converts union type `U` to an intersection type.
 *
 * Returns `U` if `U` is not a union type.
 *
 * @template U - Type to evaluate
 */
type UnionToIntersection<U> = (
  U extends unknown ? Fn<[U], void> : never
) extends Fn<[infer I], void>
  ? I
  : never

export type { UnionToIntersection as default }
