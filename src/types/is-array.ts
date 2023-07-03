/**
 * @file Type Definitions - IsArray
 * @module tutils/types/IsArray
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends an array of type `V`.
 *
 * @example
 *  type X = IsArray<['a', 'b', 'c'?]>
 *  // true
 * @example
 *  type X = IsArray<string[]>
 *  // true
 * @example
 *  type X = IsArray<['a', 'b', 'c'?], number>
 *  // false
 * @example
 *  type X = IsArray<string[], number>
 *  // false
 * @example
 *  type X = IsArray<Nilable<['a', 'b', 'c'?]>>
 *  // boolean
 * @example
 *  type X = IsArray<Nilable<string[]>>
 *  // boolean
 * @example
 *  type X = IsArray<string>
 *  // false
 * @example
 *  type X = IsArray<any>
 *  // false
 * @example
 *  type X = IsArray<never>
 *  // false
 * @example
 *  type X = IsArray<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 * @template V - Array element type
 */
type IsArray<T, V = unknown> = IfAnyOrNever<
  T,
  false,
  T extends readonly V[] ? true : false
>

export type { IsArray as default }
