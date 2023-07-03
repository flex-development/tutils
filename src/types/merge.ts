/**
 * @file Type Definitions - Merge
 * @module tutils/types/Merge
 */

import type EmptyObject from './empty-object'
import type Get from './get'
import type HasKeys from './has-keys'
import type IfOptionalKey from './if-key-optional'
import type IfExactOptionalKey from './if-key-optional-exact'
import type IfTrue from './if-true'
import type IfUndefined from './if-undefined'
import type IsAny from './is-any'
import type IsEqual from './is-equal'
import type IsNever from './is-never'
import type IsUndefined from './is-undefined'
import type NIL from './nil'
import type Nilable from './nilable'
import type ObjectCurly from './object-curly'
import type ObjectPlain from './object-plain'
import type OneOrMany from './one-or-many'
import type PropertyKey from './property-key'
import type Simplify from './simplify'

/**
 * Merges `T` and `H`.
 *
 * @internal
 *
 * @template T - Target object
 * @template H - Source object
 * @template M - Merge options
 */
type Merger<
  T extends Nilable<ObjectCurly>,
  H,
  M extends EmptyObject & { concat?: true; defaults?: true } = EmptyObject
> = IsAny<H> extends true
  ? Simplify<Record<PropertyKey, any> & T>
  : IsNever<H> extends true
  ? T
  : H extends unknown
  ? HasKeys<H> extends true
    ? IsEqual<T, H> extends true
      ? T
      : Get<M, 'concat'> extends infer C
      ? Get<M, 'defaults'> extends infer D
        ? {
            [K in keyof ({
              [K in keyof H as IsUndefined<H[K]> extends true
                ? K extends keyof T
                  ? never
                  : K
                : K extends keyof T
                ? IfTrue<D, IfOptionalKey<T, K, K, never>, K>
                : K]: K
            } & {
              [K in keyof T as K extends keyof H
                ? IsUndefined<H[K]> extends true
                  ? K
                  : IfTrue<D, IfOptionalKey<T, K, never, K>, never>
                : K]: K
            })]: Get<
              T,
              K,
              IfExactOptionalKey<T, K, never, undefined>
            > extends infer V
              ? K extends keyof H
                ? Get<
                    H,
                    K,
                    IfExactOptionalKey<H, K, never, undefined>
                  > extends infer W
                  ? [NonNullable<V>, NonNullable<W>] extends [
                      infer A extends ObjectPlain,
                      infer B extends ObjectPlain
                    ]
                    ? Extract<W, NIL> | Merger<A, B, M>
                    : [NonNullable<V>, NonNullable<W>] extends [
                        infer A extends readonly unknown[],
                        infer B extends readonly unknown[]
                      ]
                    ? Extract<W, NIL> | IfTrue<C, [...A, ...B], B>
                    : [D, K] extends [true, keyof T]
                    ? IfOptionalKey<T, K, W, V>
                    : IfUndefined<W, V, W>
                  : never
                : K extends keyof T
                ? V
                : never
              : never
          }
        : never
      : never
    : T
  : T

/**
 * Merges `T` and one or more source objects.
 *
 * Plain objects are merged recursively. Arrays are overridden by default, but
 * can be concatted recursively. Other types are overridden by assignment.
 * Source properties that resolve to `undefined` are skipped if a target object
 * value exists.
 *
 * If only defaults are to be merged, properties from one or more source objects
 * will be assigned to target object `T` for all optional properties in `T`.
 *
 * An optional property is one where {@linkcode IfOptionalKey} yields `true`, or
 * a property that only exists on a source object.
 *
 * Source objects are applied from left to right. Subsequent sources overwrite
 * property assignments of previous sources. When merging defaults, subsequent
 * source properties are ignored if the target property is no longer optional.
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
  T extends Nilable<ObjectCurly>,
  U extends OneOrMany<ObjectCurly> = EmptyObject,
  M extends EmptyObject & { concat?: true; defaults?: true } = EmptyObject
> = T extends ObjectCurly
  ? IsAny<U> extends true
    ? Simplify<Record<PropertyKey, any> & T>
    : IsNever<U> extends true
    ? T
    : U extends ObjectCurly
    ? Merger<T, U, M>
    : U extends readonly ObjectCurly[]
    ? U extends readonly [infer H, ...infer R extends ObjectCurly[]]
      ? Merge<Merger<T, H, M>, R, M>
      : Merger<T, U[0], M>
    : never
  : never

export type { Merge as default }
