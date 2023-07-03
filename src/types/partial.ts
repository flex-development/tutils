/**
 * @file Type Definitions - Partial
 * @module tutils/types/Partial
 */

import type Fn from './fn'
import type NumberLike from './number-like'
import type Primitive from './primitive'
import type Simplify from './simplify'

/**
 * Constructs a type with all properties of `T` set to optional.
 *
 * @todo implement optional array item recursion
 * @todo examples
 *
 * @template T - Type to evaluate
 */
type Partial<T> = T extends unknown
  ? {
      [K in keyof T]?: T[K] extends infer V
        ? V extends Readonly<Fn>
          ? Fn extends V
            ? V
            : Partial<V>
          : V extends Primitive
          ? Primitive extends V
            ? V
            : Partial<V>
          : T extends readonly unknown[]
          ? // preserve PartialNative functionality for plain arrays
            K extends NumberLike | keyof unknown[]
            ? V
            : Simplify<Partial<V>>
          : Simplify<Partial<V>>
        : never
    }
  : never

export type { Partial as default }
