/**
 * @file Type Definitions - ReadonlyKeys
 * @module tutils/types/ReadonlyKeys
 */

import type IfEqual from './if-equal'
import type Indices from './indices'
import type IsAny from './is-any'
import type Objectify from './objectify'
import type PropertyKey from './property-key'
import type Stringify from './stringify'

/**
 * Construct a union of `T`'s readonly property keys.
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
 *  type X = ReadonlyKeys<readonly string[]>
 *  // number | typeof Symbol.unscopables | 'length'
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
type ReadonlyKeys<T> = IsAny<T> extends true
  ? never
  : Extract<
      T extends unknown
        ? {
            [H in keyof Objectify<T> as {
              [K in H]: T[K & keyof T]
            } extends infer V
              ? IfEqual<
                  V,
                  { readonly [Q in H]: T[Q & keyof T] },
                  H,
                  IfEqual<
                    V,
                    { readonly [Q in H]?: T[Q & keyof T] },
                    H,
                    T extends readonly unknown[]
                      ? number extends H
                        ? T extends { push: unknown[]['push'] }
                          ? never
                          : number extends Indices<T>
                          ? H
                          : never
                        : never
                      : never
                  >
                >
              : never]: T extends unknown[]
              ? H
              : T extends readonly unknown[]
              ? Indices<T> extends infer I extends number
                ? H extends Stringify<I>
                  ? I
                  : H
                : never
              : H
          } extends infer X
          ? X[keyof X]
          : never
        : never,
      PropertyKey
    >

export type { ReadonlyKeys as default }
