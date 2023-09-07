/**
 * @file Type Definitions - IsTuple
 * @module tutils/types/IsTuple
 */

import type IfAnyOrNever from './if-any-or-never'
import type Length from './length'

/**
 * Returns a boolean indicating if `T` extends a [tuple][1].
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @example
 *  type X = IsTuple<readonly ['a', 'b'?]>
 *  // true
 * @example
 *  type X = IsTuple<EmptyArray>
 *  // true
 * @example
 *  type X = IsTuple<Nilable<['a', 'b'?]>>
 *  // boolean
 * @example
 *  type X = IsTuple<Optional<'a' | 'b'>[]>
 *  // false
 * @example
 *  type X = IsTuple<string[]>
 *  // false
 * @example
 *  type X = IsTuple<any>
 *  // false
 * @example
 *  type X = IsTuple<never>
 *  // false
 * @example
 *  type X = IsTuple<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsTuple<T> = IfAnyOrNever<
  T,
  false,
  // dprint-ignore
  T extends readonly unknown[]
    ? number extends Length<T>
      ? false
      : true
    : false
>

export type { IsTuple as default }
