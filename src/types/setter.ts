/**
 * @file Type Definitions - Setter
 * @module tutils/types/Setter
 */

import type Assign from './assign'
import type Dot from './dot'
import type EmptyArray from './empty-array'
import type HasKey from './has-key'
import type Head from './head'
import type Intersection from './intersection'
import type IsNever from './is-never'
import type IsNumeric from './is-numeric'
import type Join from './join'
import type Objectify from './objectify'
import type PropertyKey from './property-key'
import type ReconstructArray from './reconstruct-array'
import type Stringify from './stringify'
import type Tail from './tail'

/**
 * Set a property on `T`.
 *
 * Supports dot-notation for array and nested path updates.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Property to set
 * @template V - Property value
 */
type Setter<
  T extends object,
  K extends PropertyKey,
  V = unknown
> = T extends unknown
  ? Assign<T, { [H in K]: V }> extends infer U
    ? {
        [H in keyof U as H extends Intersection<H, K>
          ? H extends Join<[string, string], Dot>
            ? Head<H, Dot> extends infer Q
              ? HasKey<U, Q> extends true
                ? never
                : Q
              : never
            : H
          : H]: U[H] extends infer W
          ? H extends Intersection<H, K>
            ? H extends Join<[string, string], Dot>
              ? Tail<Stringify<H>, Dot> extends infer Q extends string
                ? Setter<
                    IsNumeric<Head<Q, Dot>> extends true
                      ? EmptyArray[number][]
                      : Objectify<never>,
                    Q,
                    W
                  >
                : never
              : W
            : Extract<
                K,
                Join<[Stringify<H>, string], Dot>
              > extends infer Q extends string
            ? IsNever<Q> extends true
              ? W
              : W extends object
              ? Setter<W, Tail<Q, Dot>, V>
              : W
            : never
          : never
      } extends infer X
      ? X extends readonly unknown[]
        ? ReconstructArray<X>
        : X
      : never
    : never
  : never

export type { Setter as default }
