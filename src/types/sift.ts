/**
 * @file Type Definitions - Sift
 * @module tutils/types/Sift
 */

import type EmptyArray from './empty-array'
import type Falsy from './falsy'
import type IfAnyOrNever from './if-any-or-never'
import type IfEqual from './if-equal'
import type IfTuple from './if-tuple'
import type UnionToTuple from './union-to-tuple'

/**
 * Removes {@linkcode Falsy} values from `T`.
 *
 * @example
 *  type X = Sift<readonly [EmptyString, 0, 0n, false, null, undefined]>
 *  // []
 * @example
 *  type X = Sift<readonly [Nilable<string>, 0, boolean]>
 *  // [string, true]
 * @example
 *  type X = Sift<Nilable<string>[]>
 *  // string[]
 * @example
 *  type X = Sift<any>
 *  // []
 * @example
 *  type X = Sift<never>
 *  // []
 *
 * @template T - Array to filter
 */
type Sift<T extends readonly unknown[]> = IfAnyOrNever<
  T,
  EmptyArray,
  T extends Readonly<EmptyArray>
    ? T
    : T extends readonly (infer I)[]
    ? Exclude<I, Falsy> extends infer V
      ? IfEqual<I, V, T, IfTuple<T, UnionToTuple<V>, V[]>>
      : never
    : never
>

export type { Sift as default }
