/**
 * @file Type Definitions - RequiredKeys
 * @module tutils/types/RequiredKeys
 */

import type IfAny from './if-any'
import type IfEqual from './if-equal'
import type IfIndexSignature from './if-index-signature'
import type IfLiteral from './if-literal'
import type IfTuple from './if-tuple'
import type Indices from './indices'
import type Intersection from './intersection'
import type Length from './length'
import type Opaque from './opaque'
import type { tag as OpaqueTag } from './opaque'
import type Primitive from './primitive'
import type PropertyKey from './property-key'
import type Stringify from './stringify'
import type Subtract from './subtract'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Constructs a union of required keys.
 *
 * @todo document index signature clobbering
 *
 * @example
 *  type X = RequiredKeys<{ id: string; name?: string }>
 *  // 'id'
 * @example
 *  type X = RequiredKeys<{ id: string; name: string | undefined }>
 *  // 'id' | 'name'
 * @example
 *  type X = RequiredKeys<readonly ['a', 'b'?]>
 *  // Exclude<keyof unknown[], NumberLike> | -2 | 0
 * @example
 *  type X = RequiredKeys<'a'>
 *  // Exclude<keyof string, number> | 0 | 1
 * @example
 *  type X = RequiredKeys<string[]>
 *  // keyof string[]
 * @example
 *  type X = RequiredKeys<string>
 *  // keyof string
 * @example
 *  type X = RequiredKeys<any>
 *  // never
 * @example
 *  type X = RequiredKeys<never>
 *  // never
 * @example
 *  type X = RequiredKeys<unknown>
 *  // never
 *
 * @template T - Type to evaluate
 */
type RequiredKeys<T> = IfAny<
  T,
  never,
  Extract<
    T extends unknown
      ? {
          [H in keyof (T extends Opaque<unknown>
            ? T
            : T extends Primitive
            ? Omit<Opaque<T>, typeof OpaqueTag>
            : T) as IfIndexSignature<
            T,
            H,
            IfTuple<T, never, IfLiteral<T, string, never, H>>,
            H
          >]: IfIndexSignature<
            T,
            H,
            H,
            IfEqual<
              { [K in H]: T[K & keyof T] },
              {
                [K in keyof Required<
                  T extends Opaque<unknown>
                    ? T
                    : T extends Primitive
                    ? Omit<Opaque<T>, typeof OpaqueTag>
                    : T
                > as Intersection<K, H>]: Required<T>[K & keyof T]
              },
              T extends readonly unknown[]
                ? IfTuple<
                    T,
                    H extends Stringify<Indices<T>>
                      ? UnwrapNumeric<H> extends infer N extends number
                        ?
                            | N
                            | UnwrapNumeric<
                                Exclude<
                                  `-${Subtract<Length<Required<T>>, N>}`,
                                  '-0'
                                >
                              >
                        : never
                      : H,
                    H
                  >
                : H,
              T extends readonly unknown[]
                ? H extends keyof unknown[]
                  ? H
                  : never
                : never
            >
          >
        } extends infer X
        ?
            | X[keyof X]
            | (T extends string
                ? number extends Length<T>
                  ? never
                  : Indices<T>
                : never)
        : never
      : never,
    PropertyKey
  >
>

export type { RequiredKeys as default }
