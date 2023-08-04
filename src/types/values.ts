/**
 * @file Type Definitions - Values
 * @module tutils/types/Values
 */

import type EmptyArray from './empty-array'
import type Get from './get'
import type IfNumeric from './if-numeric'
import type IfSymbol from './if-symbol'
import type IsAny from './is-any'
import type IsLiteral from './is-literal'
import type IsNever from './is-never'
import type IsTuple from './is-tuple'
import type Spread from './spread'
import type TupleFromRecord from './tuple-from-record'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Construct an array containing `T`'s own enumerable string-keyed property
 * values.
 *
 * @see {@linkcode Spread}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 *
 * @example
 *  type X = Values<{ data?: string[]; error: Nullable<Error>; msg: string }>
 *  // (Nullable<Error> | string[] | string | undefined)[]
 * @example
 *  type X = Values<readonly [number, string]>
 *  // readonly [number, string]
 * @example
 *  type X = Values<'abc'>
 *  // ('a' | 'b' | 'c')[]
 * @example
 *  type X = Values<string>
 *  // (string | undefined)[]
 * @example
 *  type X = Values<Map<number, string>>
 *  // []
 * @example
 *  type X = Values<object>
 *  // any[]
 * @example
 *  type X = Values<any>
 *  // any[]
 * @example
 *  type X = Values<never>
 *  // []
 * @example
 *  type X = Values<unknown>
 *  // []
 *
 * @template T - Type to evaluate
 */
type Values<T> = IsAny<T> extends true
  ? T[]
  : IsNever<T> extends true
  ? EmptyArray
  : T extends unknown
  ? Spread<T> extends infer U
    ? IsNever<keyof U> extends true
      ? EmptyArray
      : T extends readonly never[]
      ? EmptyArray
      : IsLiteral<T, string> extends true
      ? TupleFromRecord<{ [K in keyof U as UnwrapNumeric<K>]: U[K] }>
      : IsTuple<T> extends true
      ? TupleFromRecord<{
          [K in keyof U as UnwrapNumeric<K>]: U[K]
        }> extends infer T extends unknown[]
        ? {
            [K in keyof U as IfNumeric<K, never, IfSymbol<K, never, K>>]: U[K]
          } extends infer X
          ? IsNever<keyof X> extends true
            ? T
            : [...T, ...Get<X, any>[]]
          : never
        : never
      : Get<{ [K in keyof U as IfSymbol<K, never, K>]: U[K] }, any>[]
    : never
  : never

export type { Values as default }
