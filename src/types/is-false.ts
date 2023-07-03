/**
 * @file Type Definitions - IsFalse
 * @module tutils/types/IsFalse
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `false`.
 *
 * @example
 *  type X = IsFalse<false>
 *  // true
 * @example
 *  type X = IsFalse<boolean>
 *  // boolean
 * @example
 *  type X = IsFalse<true>
 *  // false
 * @example
 *  type X = IsFalse<any>
 *  // false
 * @example
 *  type X = IsFalse<never>
 *  // false
 * @example
 *  type X = IsFalse<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsFalse<T> = IfAnyOrNever<T, false, T extends false ? true : false>

export type { IsFalse as default }
