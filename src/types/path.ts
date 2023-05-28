/**
 * @file Type Definitions - Path
 * @module tutils/types/Path
 */

import type EmptyArray from './empty-array'
import type EmptyObject from './empty-object'
import type EmptyString from './empty-string'
import type Fn from './fn'
import type Get from './get'
import type Head from './head'
import type Indices from './indices'
import type Keys from './keys'
import type NumberString from './number-string'
import type ObjectAny from './object-any'
import type Primitive from './primitive'
import type PropertyKey from './property-key'

/**
 * Constructs a union of nested and top-level property paths.
 *
 * Non-enumerable paths are not included for builtin objects and primitives.
 *
 * Nested and array-indexable paths will be expressed using dot notation.
 *
 * @see {@linkcode Keys}
 *
 * @template T - Type to evaluate
 * @template K - Keys to begin building union
 */
type Path<T, K extends PropertyKey = Keys<T>> = T extends
  | EmptyArray
  | EmptyObject
  | EmptyString
  ? never
  : Extract<
      K extends NumberString
        ? NonNullable<T> extends readonly unknown[]
          ? NonNullable<T> extends infer U
            ? Head<NonNullable<T>> extends infer R
              ?
                  | Indices<NonNullable<U>>
                  | Path<Omit<NonNullable<U>, keyof any[]>>
                  | `${Indices<NonNullable<U>>}.${Path<R>}`
              : never
            : never
          : NonNullable<Get<T, K>> extends readonly unknown[]
          ? NonNullable<Get<T, K>> extends infer U
            ? Head<NonNullable<Get<T, K>>> extends infer R
              ?
                  | K
                  | `${K}.${Indices<NonNullable<U>>}.${Path<R>}`
                  | `${K}.${Indices<NonNullable<U>>}`
                  | `${K}.${Path<Omit<NonNullable<U>, keyof any[]>>}`
              : never
            : never
          : NonNullable<Get<T, K>> extends Readonly<Fn>
          ? NonNullable<Get<T, K>> extends infer U
            ? K | `${K}.${Path<Omit<NonNullable<U>, keyof Fn>>}`
            : never
          : NonNullable<Get<T, K>> extends ObjectAny
          ? NonNullable<Get<T, K>> extends infer U
            ? K | `${K}.${Path<NonNullable<U>>}`
            : never
          : Get<T, K> extends Readonly<Primitive>
          ? K
          : never
        : never,
      string
    >

export type { Path as default }
