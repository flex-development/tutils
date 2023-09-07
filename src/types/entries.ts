/**
 * @file Type Definitions - Entries
 * @module tutils/types/Entries
 */

import type EmptyArray from './empty-array'
import type IfNumeric from './if-numeric'
import type IfSymbol from './if-symbol'
import type IsAny from './is-any'
import type IsLiteral from './is-literal'
import type IsNever from './is-never'
import type IsTuple from './is-tuple'
import type Spread from './spread'
import type TupleFromRecord from './tuple-from-record'
import type UnwrapNumeric from './unwrap-numeric'
import type Values from './values'

/**
 * Construct an array containing `T`'s own enumerable string-keyed property
 * key-value pairs.
 *
 * @see {@linkcode Spread}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @example
 *  type X = Entries<{ data?: string[]; error: Nullable<Error> }>
 *  // (['data', string[] | undefined] | ['error', Nullable<Error>])[]
 * @example
 *  type X = Entries<readonly [number, string]>
 *  // [['0', number], ['1', string]]
 * @example
 *  type X = Entries<string[]>
 *  // [`${number}`, string][]
 * @example
 *  type X = Entries<'abc'>
 *  // [['0', 'a'], ['1', 'b'], ['2', 'c']]
 * @example
 *  type X = Entries<string>
 *  // [`${number}`, string][]
 * @example
 *  type X = Entries<object>
 *  // [string, any][]
 * @example
 *  type X = Entries<any>
 *  // [string, any][]
 * @example
 *  type X = Entries<never>
 *  // []
 * @example
 *  type X = Entries<unknown>
 *  // []
 *
 * @template T - Type to evaluate
 */
// dprint-ignore
type Entries<T> = IsAny<T> extends true
  ? [string, T][]
  : IsNever<T> extends true
  ? EmptyArray
  : T extends unknown
  ? Spread<T> extends infer U
    ? T extends readonly never[]
      ? EmptyArray
      : IsLiteral<T, string> extends true
      ? TupleFromRecord<{ [K in keyof U as UnwrapNumeric<K>]: [K, U[K]] }>
      : IsTuple<T> extends true
      ? TupleFromRecord<{
          [K in keyof U as UnwrapNumeric<K>]: [K, U[K]]
        }> extends infer T extends unknown[]
        ? {
            [K in keyof U as IfNumeric<K, never, IfSymbol<K, never, K>>]-?: [
              K,
              U[K]
            ]
          } extends infer X
          ? IsNever<keyof X> extends true
            ? T
            : [...T, ...Values<X>]
          : never
        : never
      : Values<{ [K in keyof U as IfSymbol<K, never, K>]-?: [K, U[K]] }>
    : never
  : never

export type { Entries as default }
