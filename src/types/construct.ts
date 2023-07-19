/**
 * @file Type Definitions - Construct
 * @module tutils/types/Construct
 */

import type Dot from './dot'
import type Head from './head'
import type IfAnyOrNever from './if-any-or-never'
import type Join from './join'
import type Nilable from './nilable'
import type NumberLike from './number-like'
import type Numeric from './numeric'
import type ObjectCurly from './object-curly'
import type Objectify from './objectify'
import type Stringify from './stringify'
import type Tail from './tail'
import type TupleFromRecord from './tuple-from-record'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Reconstruct a crushed object.
 *
 * A crushed object is one that was flattened to a single dimension.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
type Construct<T extends Nilable<ObjectCurly>> = IfAnyOrNever<
  T,
  Objectify<T>,
  T extends ObjectCurly
    ? {
        [K in keyof T as K extends number | symbol
          ? K
          : Head<Stringify<K>, Dot>]: T[K] extends infer V
          ? [K] extends [
              K extends number | symbol ? K : Head<Stringify<K>, Dot>
            ]
            ? V
            : Tail<Stringify<K>, Dot> extends infer R extends string
            ? Head<R, Dot> extends infer H extends string
              ? [H] extends [NumberLike]
                ? Numeric extends H
                  ? Construct<{
                      [Q in Tail<R, Dot>]: T[Extract<
                        K,
                        Join<[string, H, Q], Dot>
                      >]
                    }>[]
                  : TupleFromRecord<{
                      [N in H as UnwrapNumeric<N>]: Construct<{
                        [Q in Tail<
                          Extract<R, Join<[N, string], Dot>>,
                          Dot
                        >]: T[Extract<K, Join<[string, N, Q], Dot>>]
                      }>
                    }>
                : Construct<{ [K in R]: V }>
              : never
            : never
          : never
      }
    : Objectify<T>
>

export type { Construct as default }
