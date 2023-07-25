/**
 * @file Type Definitions - ReconstructArray
 * @module tutils/types/ReconstructArray
 */

import type EmptyArray from './empty-array'
import type IfNumber from './if-number'
import type IfNumeric from './if-numeric'
import type IsAny from './is-any'
import type IsNever from './is-never'
import type Length from './length'
import type TupleFromRecord from './tuple-from-record'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Pretty print an array-like object.
 *
 * @internal
 *
 * @template T - Type to evaluate
 */
type ReconstructArray<T> = IsAny<T> extends true
  ? T[]
  : IsNever<T> extends true
  ? EmptyArray
  : T extends readonly unknown[]
  ? (
      {
        [K in keyof T as IfNumber<
          K,
          number extends K ? never : K,
          IfNumeric<K, UnwrapNumeric<K>, never>
        >]: T[K]
      } extends infer M extends { [K in number]?: unknown }
        ? number extends Length<T>
          ? (M[keyof M] | T[number])[]
          : TupleFromRecord<M>
        : never
    ) extends infer X extends readonly unknown[]
    ? (
        T extends unknown[] ? X : Readonly<X>
      ) extends infer Y extends readonly unknown[]
      ? {
          [K in keyof T as IfNumeric<
            K,
            never,
            K extends keyof unknown[] ? never : K
          >]: T[K]
        } extends infer Z
        ? IsNever<keyof Z> extends true
          ? Y
          : Y & Z
        : never
      : never
    : never
  : T

export type { ReconstructArray as default }
