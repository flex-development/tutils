/**
 * @file Type Definitions - Keys
 * @module tutils/types/Keys
 */

import type Dot from './dot'
import type EmptyArray from './empty-array'
import type EmptyObject from './empty-object'
import type Get from './get'
import type IfString from './if-string'
import type Intersection from './intersection'
import type IsNever from './is-never'
import type Join from './join'
import type Nilable from './nilable'
import type Spread from './spread'
import type Stringify from './stringify'

/**
 * Construct an array type representing `T`'s own enumerable string-keyed
 * property names.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Key retrieval options
 */
type Keys<
  T,
  K extends Nilable<EmptyObject & { deep?: Nilable<boolean> }> = undefined
> = (
  IsNever<T> extends true
    ? EmptyArray
    : T extends unknown
    ? Spread<T> extends infer U
      ? IsNever<keyof U> extends true
        ? EmptyArray
        : {
            [H in keyof U as IfString<H, H, never>]-?:
              | H
              | (true extends Intersection<true, Get<K, 'deep', false>>
                  ? T extends string
                    ? never
                    : Join<[Stringify<H>, Keys<U[H], K>[number]], Dot>
                  : never)
          } extends infer X
        ? Get<X, any> extends infer H
          ? H[]
          : never
        : never
      : never
    : never
) extends infer X extends string[]
  ? X
  : never

export type { Keys as default }
