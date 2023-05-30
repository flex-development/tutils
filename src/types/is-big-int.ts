/**
 * @file Type Definitions - IsBigInt
 * @module tutils/types/IsBigInt
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is a `bigint`.
 *
 * @template T - Type to evaluate
 */
type IsBigInt<T> = IfAnyOrNever<T, false, [T] extends [bigint] ? true : false>

export type { IsBigInt as default }
