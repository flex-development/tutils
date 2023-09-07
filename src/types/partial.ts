/**
 * @file Type Definitions - Partial
 * @module tutils/types/Partial
 */

import type EmptyObject from './empty-object'
import type Fn from './fn'
import type IfTrue from './if-true'
import type IfUnknown from './if-unknown'
import type IsNever from './is-never'
import type NumberLike from './number-like'
import type Simplify from './simplify'

/**
 * Construct a type with all properties of `T` set to optional.
 *
 * Supports nested property updates.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template R - Recursion options
 */
type Partial<
  T,
  R extends EmptyObject & { arrays?: true } = EmptyObject
> = T extends unknown
  // dprint-ignore
  ? IsNever<keyof T> extends true
    ? IfUnknown<T, { [K in keyof T]?: T[K] }, T>
    : Simplify<{
        [K in keyof T]?: T[K] extends infer V
          ? V extends Readonly<Fn>
            ? Fn extends V
              ? V
              : Partial<V>
            : T extends readonly unknown[]
            ? K extends NumberLike | keyof unknown[]
              ? IfTrue<R['arrays'], Partial<V>, V>
              : Partial<V>
            : Partial<V>
          : never
      }>
  : never

export type { Partial as default }
