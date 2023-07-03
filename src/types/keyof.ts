/**
 * @file Type Definitions - Keyof
 * @module tutils/types/Keyof
 */

import type { tag as EmptyObjectTag } from './empty-object'
import type IfAny from './if-any'
import type IfNever from './if-never'
import type Indices from './indices'
import type IsTuple from './is-tuple'
import type Primitive from './primitive'
import type PropertyKey from './property-key'
import type Stringify from './stringify'

/**
 * Constructs a union of `T`'s property keys.
 *
 * @todo document index signature clobbering
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template F - Key type filter
 */
type Keyof<T, F extends PropertyKey = PropertyKey> = Extract<
  IfAny<
    T,
    keyof T,
    IfNever<
      T,
      never,
      T extends string | readonly unknown[]
        ? Indices<T> extends infer I extends number
          ?
              | Exclude<
                  keyof T,
                  number | (IsTuple<T> extends true ? Stringify<I> : never)
                >
              | I
          : never
        : T extends object
        ? Exclude<{ [K in keyof T]: K }[keyof T], typeof EmptyObjectTag>
        : T extends Primitive
        ? keyof T
        : never
    >
  >,
  IfAny<F, PropertyKey, IfNever<F, never, F>>
>

export type { Keyof as default }
