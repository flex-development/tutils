/**
 * @file Type Definitions - OptionalKeys
 * @module tutils/types/OptionalKeys
 */

import type IfRequiredKey from './if-key-required'
import type Indices from './indices'
import type Length from './length'
import type Objectify from './objectify'
import type PropertyKey from './property-key'
import type Stringify from './stringify'
import type Subtract from './subtract'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Construct a union of `T`'s optional property keys.
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
type OptionalKeys<T> = Extract<
  T extends unknown
    ? {
        [H in keyof Objectify<T> as IfRequiredKey<
          T,
          H,
          never,
          H
        >]: T extends readonly unknown[]
          ? Indices<T> extends infer I extends number
            ? number extends I
              ? H
              : H extends Stringify<I>
              ? UnwrapNumeric<H> extends infer N extends number
                ?
                    | N
                    | UnwrapNumeric<
                        Exclude<`-${Subtract<Length<Required<T>>, N>}`, '-0'>
                      >
                : never
              : H
            : never
          : H
      } extends infer X
      ? X[keyof X]
      : never
    : never,
  PropertyKey
>

export type { OptionalKeys as default }
