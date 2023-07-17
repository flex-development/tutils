/**
 * @file Type Definitions - RequiredKeys
 * @module tutils/types/RequiredKeys
 */

import type IfAny from './if-any'
import type IfEqual from './if-equal'
import type Indices from './indices'
import type Intersection from './intersection'
import type Invert from './invert'
import type Length from './length'
import type Objectify from './objectify'
import type PropertyKey from './property-key'
import type Stringify from './stringify'
import type Subtract from './subtract'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Construct a union of `T`'s required property keys.
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
      ? Objectify<T> extends infer U
        ? Invert<{
            [H in keyof U as IfEqual<
              { [K in H]: U[K] },
              {
                [K in keyof Required<U> as Intersection<K, H>]: Required<U>[K]
              },
              T extends string | readonly unknown[]
                ? Indices<T> extends infer I extends number
                  ? number extends I
                    ? H
                    : H extends Stringify<I>
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
                    : number extends H
                    ? T extends string
                      ? I
                      : never
                    : H
                  : H
                : H,
              never
            >]: PropertyKey
          }> extends infer X
          ? X[keyof X]
          : never
        : never
      : never,
    PropertyKey
  >
>

export type { RequiredKeys as default }
