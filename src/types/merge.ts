/**
 * @file Type Definitions - Merge
 * @module tutils/types/Merge
 */

import type EmptyObject from './empty-object'
import type HasKey from './has-key'
import type IsAnyOrNever from './is-any-or-never'
import type IsEqual from './is-equal'
import type Nilable from './nilable'
import type ObjectCurly from './object-curly'
import type ObjectPlain from './object-plain'
import type Objectify from './objectify'
import type OneOrMany from './one-or-many'
import type ReconstructArray from './reconstruct-array'

/**
 * Merges `T` and `U`.
 *
 * @internal
 *
 * @template T - Target object
 * @template U - Source object
 * @template M - Merge options
 */
type Merger<
  T extends Objectify<any>,
  U,
  M extends EmptyObject & { concat?: Nilable<boolean> } = EmptyObject
> = IsEqual<T, U> extends true
  ? T
  : U extends ObjectCurly
  ? ReconstructArray<{
      [K in keyof (U & {
        [K in keyof Objectify<T> as HasKey<U, K> extends true ? never : K]: K
      })]: HasKey<U, K> extends true
        ? M['concat'] extends infer C
          ? Required<T>[K] extends infer V
            ? Required<U>[K] extends infer W
              ? W extends ObjectPlain
                ? V extends ObjectPlain
                  ? Merger<V, W, M>
                  : W
                : W extends readonly unknown[]
                ? V extends readonly unknown[]
                  ? C extends true
                    ? [...V, ...W]
                    : W
                  : W
                : W
              : never
            : never
          : never
        : HasKey<T, K> extends true
        ? T[K]
        : never
    }>
  : T

/**
 * Merges `T` and one or more source objects.
 *
 * Plain object properties are merged recursively. Arrays are overridden by
 * default, but can be concatted recursively. Other objects and value types are
 * overridden by assignment.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources.
 *
 * @see {@linkcode ObjectPlain}
 *
 * @todo examples
 *
 * @template T - Target object
 * @template U - Source object or source object array
 * @template M - Merge options
 */
type Merge<
  T extends object,
  U extends OneOrMany<ObjectCurly> = EmptyObject,
  M extends EmptyObject & { concat?: Nilable<boolean> } = EmptyObject
> = IsAnyOrNever<U> extends true
  ? Merger<T, Objectify<U>>
  : T extends unknown
  ? U extends ObjectCurly
    ? Merger<T, Objectify<U>, M>
    : U extends readonly ObjectCurly[]
    ? U extends readonly [infer H, ...infer R extends ObjectCurly[]]
      ? Merge<Merger<T, Objectify<H>, M>, R, M>
      : Merger<T, Objectify<U[0]>, M>
    : never
  : never

export type { Merge as default }
