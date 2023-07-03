/**
 * @file Type Definitions - IsString
 * @module tutils/types/IsString
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `string`.
 *
 * @example
 *  type X = IsString<'abc'>
 *  // true
 * @example
 *  type X = IsString<string>
 *  // true
 * @example
 *  type X = IsString<Nilable<string>>
 *  // boolean
 * @example
 *  type X = IsString<any>
 *  // false
 * @example
 *  type X = IsString<never>
 *  // false
 * @example
 *  type X = IsString<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsString<T> = IfAnyOrNever<T, false, T extends string ? true : false>

export type { IsString as default }
