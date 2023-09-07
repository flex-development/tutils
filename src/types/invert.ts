/**
 * @file Type Definitions - Invert
 * @module tutils/types/Invert
 */

import type IsAnyOrNever from './is-any-or-never'
import type Nilable from './nilable'
import type Objectify from './objectify'
import type Primitive from './primitive'
import type PropertyKey from './property-key'
import type Stringify from './stringify'

/**
 * Construct an object type with keys and values of `T` reversed.
 *
 * @example
 *  type X = Invert<{ readonly 0: 'a'; 1: 'b'; 2: 'c'; 3?: 'd'; 4?: 'e' }>
 *  // { readonly a: 0; b: 1; c: 2; d?: 3; e?: 4; undefined?: 3 | 4 }
 *
 * @template T - Type to evaluate
 */
type Invert<T extends Nilable<{ [K in PropertyKey]?: Primitive }>> =
  // dprint-ignore
  IsAnyOrNever<T> extends true
    ? Objectify<T>
    : T extends unknown
    ? Objectify<T> extends infer U
      ? T extends object
        ? {
            [K in keyof U as U[K] extends infer V
              ? V extends PropertyKey
                ? V
                : Stringify<V>
              : never]: K
          }
        : U
      : never
    : never

export type { Invert as default }
