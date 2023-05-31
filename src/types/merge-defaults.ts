/**
 * @file Type Definitions - MergeDefaults
 * @module tutils/types/MergeDefaults
 */

import type EmptyArray from './empty-array'
import type EmptyObject from './empty-object'
import type Head from './head'
import type IfNever from './if-never'
import type Merge from './merge'
import type ObjectCurly from './object-curly'
import type OneOrMany from './one-or-many'
import type Optional from './optional'

/**
 * Assigns properties from one or more source objects to target object `T` for
 * all optional properties in `T`.
 *
 * Source objects are applied from left to right. Once a property is set on `T`,
 * additional values of the same property are ignored if the property is no
 * longer optional.
 *
 * @template T - Target object
 * @template U - Source object or source object array
 */
type MergeDefaults<
  T extends ObjectCurly,
  U extends OneOrMany<Partial<T>> = EmptyObject
> = U extends EmptyArray | EmptyObject
  ? T
  : U extends Partial<T>
  ? MergeDefaults<T, [U]>
  : U extends [infer H, ...infer Rest extends readonly ObjectCurly[]]
  ? Merge<
      T,
      {
        [K in keyof H & keyof T]: T[K & keyof T] extends infer V
          ? IfNever<
              Extract<V, undefined>,
              V,
              Exclude<V, Optional<H[K & keyof H]>> | H[K & keyof H]
            >
          : never
      }
    > extends infer V extends ObjectCurly
    ? Rest extends readonly Partial<V>[]
      ? MergeDefaults<V, Rest>
      : never
    : never
  : Head<U> extends infer S extends Partial<T>
  ? MergeDefaults<T, [S]>
  : never

export type { MergeDefaults as default }
