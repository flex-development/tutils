/**
 * @file Type Definitions - IsTrue
 * @module tutils/types/IsTrue
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `true`.
 *
 * @example
 *  type X = IsTrue<true>
 *  // true
 * @example
 *  type X = IsTrue<boolean>
 *  // boolean
 * @example
 *  type X = IsTrue<false>
 *  // false
 * @example
 *  type X = IsTrue<any>
 *  // false
 * @example
 *  type X = IsTrue<never>
 *  // false
 * @example
 *  type X = IsTrue<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsTrue<T> = IfAnyOrNever<T, false, T extends true ? true : false>

export type { IsTrue as default }
