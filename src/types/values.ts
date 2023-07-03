/**
 * @file Type Definitions - Values
 * @module tutils/types/Values
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
 * property values.
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
 *
 * @template T - Type to evaluate
 */
type Values<T extends Nilable<object>> = IfAny<
  T,
  T[],
  IfNever<
    T,
    EmptyArray,
    T extends readonly unknown[]
      ? T
      : object extends T
      ? IfEqual<T, object, any[], EmptyArray>
      : T extends object
      ? Head<Stringify<Path<T, true>>, Dot> extends infer H extends string
        ? IfNever<H, EmptyArray, { [K in H]: Get<T, K> }[H][]>
        : never
      : EmptyArray
  >
>

export type { Values as default }
