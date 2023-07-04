/**
 * @file Type Definitions - Invert
 * @module tutils/types/Invert
 */

import type EmptyObject from './empty-object'
import type IfAny from './if-any'
import type IfNever from './if-never'
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
type Invert<T extends { [K in PropertyKey]?: Primitive }> = IfAny<
  T,
  Record<PropertyKey, PropertyKey>,
  IfNever<
    T,
    Record<never, never>,
    T extends unknown
      ? EmptyObject extends T
        ? Record<never, never>
        : {
            [K in keyof T as T[K] extends infer V
              ? V extends PropertyKey
                ? V
                : Stringify<V>
              : never]: K
          }
      : never
  >
>

export type { Invert as default }
