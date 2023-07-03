/**
 * @file Type Definitions - IsObject
 * @module tutils/types/IsObject
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `object`.
 *
 * @example
 *  type X = IsObject<{ hello: 'world' }>
 *  // true
 * @example
 *  type X = IsObject<(n: number) => string>
 *  // true
 * @example
 *  type X = IsObject<readonly string[]>
 *  // true
 * @example
 *  type X = IsObject<object>
 *  // true
 * @example
 *  type X = IsObject<Nilable<string[]>>
 *  // boolean
 * @example
 *  type X = IsObject<any>
 *  // false
 * @example
 *  type X = IsObject<never>
 *  // false
 * @example
 *  type X = IsObject<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsObject<T> = IfAnyOrNever<T, false, T extends object ? true : false>

export type { IsObject as default }
