/**
 * @file Type Definitions - UnionToTuple
 * @module tutils/types/UnionToTuple
 */

import type EmptyArray from './empty-array'
import type Fn from './fn'
import type UnionToIntersection from './union-to-intersection'

/**
 * Convert a union to a [tuple][1].
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @example
 *  type X = UnionToTuple<0 | 1 | 2>
 *  // [0, 1, 2]
 * @example
 *  type X = UnionToTuple<number | string>
 *  // [number, string]
 * @example
 *  type X = UnionToTuple<any>
 *  // [any]
 * @example
 *  type X = UnionToTuple<never>
 *  // []
 * @example
 *  type X = UnionToTuple<unknown>
 *  // [unknown]
 *
 * @template T - Type to evaluate
 */
type UnionToTuple<T> = UnionToIntersection<
  T extends never ? never : Fn<[T], T>
> extends Fn<[never], infer W>
  // dprint-ignore
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : EmptyArray

export type { UnionToTuple as default }
