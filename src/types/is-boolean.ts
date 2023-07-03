/**
 * @file Type Definitions - IsBoolean
 * @module tutils/types/IsBoolean
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `boolean`.
 *
 * @example
 *  type X = IsBoolean<boolean>
 *  // true
 * @example
 *  type X = IsBoolean<false>
 *  // true
 * @example
 *  type X = IsBoolean<true>
 *  // true
 * @example
 *  type X = IsBoolean<1 | true>
 *  // boolean
 * @example
 *  type X = IsBoolean<any>
 *  // false
 * @example
 *  type X = IsBoolean<never>
 *  // false
 * @example
 *  type X = IsBoolean<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsBoolean<T> = IfAnyOrNever<T, false, T extends boolean ? true : false>

export type { IsBoolean as default }
