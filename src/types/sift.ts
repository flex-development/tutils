/**
 * @file Type Definitions - Sift
 * @module tutils/types/Sift
 */

import type EmptyArray from './empty-array'
import type Falsy from './falsy'
import type IfNever from './if-never'
import type IfTuple from './if-tuple'
import type UnionToTuple from './union-to-tuple'

/**
 * Filters falsy types out of `T`.
 *
 * @see {@linkcode Falsy}
 *
 * @template T - Array to filter
 */
type Sift<T extends readonly unknown[]> = T extends EmptyArray
  ? T
  : T extends readonly (infer I)[]
  ? Exclude<I, Falsy> extends infer W
    ? IfTuple<T, UnionToTuple<W>, IfNever<W, Extract<EmptyArray, []>, W[]>>
    : never
  : never

export type { Sift as default }
