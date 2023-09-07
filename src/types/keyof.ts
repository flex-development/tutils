/**
 * @file Type Definitions - Keyof
 * @module tutils/types/Keyof
 */

import type IfAny from './if-any'
import type IfNever from './if-never'
import type Indices from './indices'
import type PropertyKey from './property-key'
import type Remap from './remap'

/**
 * Construct a union of `T`'s property keys.
 *
 * @see {@linkcode Remap}
 *
 * @todo document index signature clobbering
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template F - Key type filter
 */
type Keyof<T, F extends PropertyKey = PropertyKey> = Extract<
  IfNever<
    T,
    keyof Remap<T>,
    // dprint-ignore
    T extends unknown
      ? Remap<T> extends infer U
        ? keyof {
            [K in keyof U as T extends string | readonly unknown[]
              ? number extends Indices<T>
                ? K
                : number extends K
                ? never
                : K
              : K]: U[K]
          }
        : never
      : never
  >,
  IfAny<F, PropertyKey, IfNever<F, never, F>>
>

export type { Keyof as default }
