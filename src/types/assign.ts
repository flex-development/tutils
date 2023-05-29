/**
 * @file Type Definitions - Assign
 * @module tutils/types/Assign
 */

import type EmptyArray from './empty-array'
import type EmptyObject from './empty-object'
import type Head from './head'
import type Merge from './merge'
import type ObjectCurly from './object-curly'
import type OneOrMany from './one-or-many'
import type Simplify from './simplify'

/**
 * Merges one or more source objects into target object `T`.
 *
 * Source objects are applied from left to right. Properties of rightmost
 * sources override those of leftmost sources.
 *
 * @template T - Target object
 * @template U - Source object or source object array
 */
type Assign<
  T extends ObjectCurly,
  U extends OneOrMany<ObjectCurly> = EmptyObject
> = U extends EmptyArray | EmptyObject
  ? T
  : U extends ObjectCurly
  ? Merge<T, U>
  : Simplify<
      U extends [infer H, ...infer Rest extends readonly ObjectCurly[]]
        ? Assign<H & Omit<T, keyof H>, Rest>
        : Assign<T, Head<U>>
    >

export type { Assign as default }
