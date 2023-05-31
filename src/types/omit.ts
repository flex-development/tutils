/**
 * @file Type Definitions - Omit
 * @module tutils/types/Omit
 */

import type EmptyObject from './empty-object'
import type Get from './get'
import type Head from './head'
import type IfExactOptionalKey from './if-key-optional-exact'
import type IfRequiredKey from './if-key-required'
import type IfNever from './if-never'
import type NumberString from './number-string'
import type Pick from './pick'
import type Optional from './optional'
import type Simplify from './simplify'
import type UnionToIntersection from './union-to-intersection'

/**
 * From `T`, omit a set of properties whose keys are in the union `K`.
 *
 * This is the opposite of {@linkcode Pick}.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @template T - Type to evaluate
 * @template K - Keys to remove
 */
type Omit<T, K extends NumberString> = Simplify<
  UnionToIntersection<
    Head<`${K}`> extends infer H extends string
      ? Pick<T, Exclude<keyof T, H | symbol>> extends infer U
        ? K extends `${infer F}.${infer Rest}`
          ? Omit<NonNullable<Get<T, F>>, Rest> extends infer V
            ? IfRequiredKey<
                T,
                F,
                U & { [key in F]: V },
                IfExactOptionalKey<
                  T,
                  F,
                  U & { [key in F]?: V },
                  U & { [key in F]?: Optional<V> }
                >
              >
            : never
          : IfNever<keyof U, EmptyObject, U>
        : never
      : never
  >
>

export type { Omit as default }
