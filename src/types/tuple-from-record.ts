/**
 * @file Type Definitions - TupleFromRecord
 * @module tutils/types/TupleFromRecord
 */

import type EmptyArray from './empty-array'
import type EmptyObject from './empty-object'
import type OmitNative from './omit-native'

/**
 * Construct a tuple from a record.
 *
 * @internal
 *
 * @template M - Tuple elements record
 * @template F - Fallback item type
 * @template Acc - Tuple elements accumulator
 */
type TupleFromRecord<
  M extends { [K in number]?: unknown },
  F = never,
  Acc extends readonly unknown[] = EmptyArray
> = // dprint-ignore
  M extends unknown
  ? EmptyObject extends M
    ? Acc
    : Required<Acc>['length'] extends infer I extends number
    ? I extends keyof M
      ? TupleFromRecord<
          OmitNative<M, I>,
          F,
          M extends { [K in I]: M[I] } ? [...Acc, M[I]] : [...Acc, M[I]?]
        >
      : TupleFromRecord<M, F, [...Acc, F]>
    : never
  : never

export type { TupleFromRecord as default }
