/**
 * @file Type Definitions - IsTuple
 * @module tutils/types/IsTuple
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is a [tuple][1].
 *
 * [1]: https://www.codecademy.com/resources/docs/typescript/tuples
 *
 * @template T - Type to evaluate
 */
type IsTuple<T> = IfAnyOrNever<
  T,
  false,
  [T] extends [[infer U, ...infer Rest]] ? true : false
>

export type { IsTuple as default }
