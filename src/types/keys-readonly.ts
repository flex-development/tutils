/**
 * @file Type Definitions - ReadonlyKeys
 * @module tutils/types/ReadonlyKeys
 */

import type IfAny from './if-any'
import type IfEqual from './if-equal'
import type IfTuple from './if-tuple'
import type Indices from './indices'
import type Length from './length'
import type Opaque from './opaque'
import type { tag as OpaqueTag } from './opaque'
import type Primitive from './primitive'
import type PropertyKey from './property-key'
import type Stringify from './stringify'

/**
 * Constructs a union of readonly keys.
 *
 * @see https://github.com/microsoft/TypeScript/issues/14295
 *
 * @example
 *  type X = ReadonlyKeys<{ readonly id: string; name: string }>
 *  // 'id'
 * @example
 *  type X = ReadonlyKeys<{ id: string; name: string }>
 *  // never
 * @example
 *  type X = ReadonlyKeys<readonly ['a', 'b'?]>
 *  // typeof Symbol.unscopables | -1 | -2 | 'length' | 0 | 1
 * @example
 *  type X = ReadonlyKeys<'data'>
 *  // 'length'
 * @example
 *  type X = ReadonlyKeys<any>
 *  // never
 * @example
 *  type X = ReadonlyKeys<never>
 *  // never
 * @example
 *  type X = ReadonlyKeys<unknown>
 *  // never
 *
 * @template T - Type to evaluate
 */
type ReadonlyKeys<T> = IfAny<
  T,
  never,
  Extract<
    T extends unknown
      ?
          | ({
              [H in keyof (T extends Opaque<unknown>
                ? T
                : T extends Primitive
                ? Omit<Opaque<T>, typeof OpaqueTag>
                : T) as T extends readonly unknown[]
                ? IfTuple<T, H extends Stringify<Indices<T>> ? never : H, H>
                : H]: { [K in H]: T[K & keyof T] } extends infer V
                ? IfEqual<
                    V,
                    { readonly [Q in H]: T[Q & keyof T] },
                    H,
                    IfEqual<V, { readonly [Q in H]?: T[Q & keyof T] }, H, never>
                  >
                : never
            } extends infer X
              ? X[keyof X]
              : never)
          | (T extends readonly unknown[]
              ? number extends Length<T>
                ? never
                : T extends { push: unknown[]['push'] }
                ? never
                : Indices<T>
              : never)
      : never,
    PropertyKey
  >
>

export type { ReadonlyKeys as default }
