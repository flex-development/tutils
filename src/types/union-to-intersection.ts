/**
 * @file Type Definitions - UnionToIntersection
 * @module tutils/types/UnionToIntersection
 */

import type Fn from './fn'

/**
 * Convert a union to an intersection using [distributive conditional types][1].
 *
 * [1]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types
 *
 * @see https://stackoverflow.com/a/50375286/2172153
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections
 *
 * @example
 *  type X = UnionToIntersection<{ x: 0 } | { y: 0 }>
 *  // { x: 0 } & { y: 0 }
 * @example
 *  type X = UnionToIntersection<{ x: 0 }>
 *  // { x: 0 }
 * @example
 *  type X = UnionToIntersection<any>
 *  // any
 * @example
 *  type X = UnionToIntersection<never>
 *  // unknown
 * @example
 *  type X = UnionToIntersection<unknown>
 *  // unknown
 *
 * @template T - Type to evaluate
 */
type UnionToIntersection<T> = (
  T extends unknown ? Fn<[T], void> : never
) extends Fn<[infer I], void>
  // dprint-ignore
  ? I
  : never

export type { UnionToIntersection as default }
