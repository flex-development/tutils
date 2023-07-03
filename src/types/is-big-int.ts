/**
 * @file Type Definitions - IsBigInt
 * @module tutils/types/IsBigInt
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `bigint`.
 *
 * @example
 *  type X = IsBigInt<1n>
 *  // true
 * @example
 *  type X = IsBigInt<bigint>
 *  // true
 * @example
 *  type X = IsBigInt<bigint | number>
 *  // boolean
 * @example
 *  type X = IsBigInt<number>
 *  // false
 * @example
 *  type X = IsBigInt<any>
 *  // false
 * @example
 *  type X = IsBigInt<never>
 *  // false
 * @example
 *  type X = IsBigInt<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsBigInt<T> = IfAnyOrNever<T, false, T extends bigint ? true : false>

export type { IsBigInt as default }
