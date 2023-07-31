/**
 * @file Type Definitions - Length
 * @module tutils/types/Length
 */

import type EmptyString from './empty-string'
import type IfAny from './if-any'
import type Split from './split'

/**
 * Returns the length of `T`.
 *
 * @example
 *  type X = Length<['a', 'b', 'c']>
 *  // 3
 * @example
 *  type X = Length<['a', 'b', 'c'?]>
 *  // 2 | 3
 * @example
 *  type X = Length<'abc'>
 *  // 3
 * @example
 *  type X = Length<Readonly<EmptyArray>>
 *  // 0
 * @example
 *  type X = Length<EmptyString>
 *  // 0
 * @example
 *  type X = Length<string[]>
 *  // number
 * @example
 *  type X = Length<string>
 *  // number
 * @example
 *  type X = Length<any>
 *  // number
 * @example
 *  type X = Length<never>
 *  // never
 *
 * @template T - Type to evaluate
 */
type Length<T extends { length: number }> =
  T['length'] extends infer L extends number
    ? IfAny<L, number, T extends string ? Split<T, EmptyString>['length'] : L>
    : never

export type { Length as default }
