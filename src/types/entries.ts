/**
 * @file Type Definitions - Entries
 * @module tutils/types/Entries
 */

import type Dot from './dot'
import type EmptyArray from './empty-array'
import type Get from './get'
import type Head from './head'
import type IfAny from './if-any'
import type IfEqual from './if-equal'
import type IfNever from './if-never'
import type Nilable from './nilable'
import type Path from './path'
import type Stringify from './stringify'

/**
 * Construct an array type where items are `T`'s own enumerable string-keyed
 * property key-value pairs.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *
 * @example
 *  type X = Entries<{ data?: string[]; error: Nullable<Error> }>
 *  // (['data', string[] | undefined] | ['error', Nullable<Error>])[]
 * @example
 *  type X = Entries<readonly [number, string]>
 *  // readonly [['0', number], ['1', string]]
 * @example
 *  type X = Entries<string[]>
 *  // [`${number}`, string][]
 * @example
 *  type X = Entries<object>
 *  // [string, any[]][]
 * @example
 *  type X = Entries<any>
 *  // [string, any[]][]
 * @example
 *  type X = Entries<never>
 *  // []
 *
 * @template T - Type to evaluate
 */
type Entries<T extends Nilable<object>> = IfAny<
  T,
  [string, T][],
  IfNever<
    T,
    EmptyArray,
    T extends readonly unknown[]
      ? { [K in keyof T]: [K extends number ? Stringify<K> : K, T[K]] }
      : object extends T
      ? IfEqual<T, object, [string, any][], EmptyArray>
      : T extends object
      ? Head<Stringify<Path<T, true>>, Dot> extends infer H extends string
        ? IfNever<H, EmptyArray, { [K in H]: [K, Get<T, K>] }[H][]>
        : never
      : EmptyArray
  >
>

export type { Entries as default }
