/**
 * @file Type Definitions - Values
 * @module tutils/types/Values
 */

import type EmptyArray from './empty-array'
import type Get from './get'
import type IfSymbol from './if-symbol'
import type IsAny from './is-any'
import type IsEqual from './is-equal'
import type IsNever from './is-never'
import type Spread from './spread'

/**
 * Construct an array type representing `T`'s own string-keyed property values.
 *
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
  : T extends readonly unknown[]
  ? T
  : Spread<IsEqual<T, object> extends true ? any : T> extends infer U
  ? IsNever<keyof U> extends true
    ? EmptyArray
    : Get<{ [K in keyof U as IfSymbol<K, never, K>]: U[K] }, any>[]
  : never

export type { Values as default }
