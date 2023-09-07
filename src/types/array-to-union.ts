/**
 * @file Type Definitions - ArrayToUnion
 * @module tutils/types/ArrayToUnion
 */

import type IfAny from './if-any'
import type Nilable from './nilable'

/**
 * Converts array `T` to a [union][1].
 *
 * [1]: https://www.typescriptlang.org/docs/handbook/unions-and-intersections#union-types
 *
 * @example
 *  type X = ArrayToUnion<['a', 'b', 'c']>
 *  // 'a' | 'b' | 'c'
 * @example
 *  type X = ArrayToUnion<['a', 'b', 'c'?]>
 *  // 'a' | 'b' | 'c' | undefined
 * @example
 *  type X = ArrayToUnion<Readonly<EmptyArray>>
 *  // never
 * @example
 *  type X = ArrayToUnion<any>
 *  // never
 * @example
 *  type X = ArrayToUnion<never>
 *  // never
 *
 * @template T - Type to evaluate
 */
type ArrayToUnion<T extends Nilable<readonly unknown[]>> =
  // dprint-ignore
  T extends readonly unknown[] ? IfAny<T, never, T[number]> : never

export type { ArrayToUnion as default }
