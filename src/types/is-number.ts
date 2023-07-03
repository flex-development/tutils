/**
 * @file Type Definitions - IsNumber
 * @module tutils/types/IsNumber
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `number`.
 *
 * @example
 *  type X = IsNumber<1>
 *  // true
 * @example
 *  type X = IsNumber<number>
 *  // true
 * @example
 *  type X = IsNumber<Timestamp<'unix'>>
 *  // true
 * @example
 *  type X = IsNumber<Nilable<number>>
 *  // boolean
 * @example
 *  type X = IsNumber<any>
 *  // false
 * @example
 *  type X = IsNumber<never>
 *  // false
 * @example
 *  type X = IsNumber<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsNumber<T> = IfAnyOrNever<T, false, T extends number ? true : false>

export type { IsNumber as default }
