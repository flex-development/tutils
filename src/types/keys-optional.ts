/**
 * @file Type Definitions - OptionalKeys
 * @module tutils/types/OptionalKeys
 */

import type IfAny from './if-any'
import type IfRequiredKey from './if-key-required'
import type IfTuple from './if-tuple'
import type Indices from './indices'
import type Length from './length'
import type Opaque from './opaque'
import type { tag as OpaqueTag } from './opaque'
import type Primitive from './primitive'
import type PropertyKey from './property-key'
import type Stringify from './stringify'
import type Subtract from './subtract'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Constructs a union of optional keys.
 *
 * @example
 *  type X = OptionalKeys<{ id: string; name?: string }>
 *  // 'name'
 * @example
 *  type X = OptionalKeys<{ id: string; name: string | undefined }>
 *  // never
 * @example
 *  type X = OptionalKeys<readonly['a', 'b', 'c'?]>
 *  // -1 | 2
 * @example
 *  type X = OptionalKeys<readonly['a', 'b', 'c']>
 *  // -never
 * @example
 *  type X = OptionalKeys<{ id: string }[]>
 *  // never
 * @example
 *  type X = OptionalKeys<'abc'>
 *  // never
 * @example
 *  type X = OptionalKeys<string>
 *  // never
 * @example
 *  type X = OptionalKeys<any>
 *  // never
 * @example
 *  type X = OptionalKeys<never>
 *  // never
 * @example
 *  type X = OptionalKeys<unknown>
 *  // never
 *
 * @template T - Type to evaluate
 */
type OptionalKeys<T> = IfAny<
  T,
  never,
  Extract<
    T extends unknown
      ? {
          [H in keyof (T extends Opaque<unknown>
            ? T
            : T extends Primitive
            ? Omit<Opaque<T>, typeof OpaqueTag>
            : T) as IfRequiredKey<T, H, never, H>]: T extends readonly unknown[]
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
            : H
        } extends infer X
        ? X[keyof X]
        : never
      : never,
    PropertyKey
  >
>

export type { OptionalKeys as default }
