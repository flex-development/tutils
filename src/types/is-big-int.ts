/**
 * @file Type Definitions - IsBigInt
 * @module tutils/types/IsBigInt
 */

/**
 * Returns a boolean indicating if `T` extends `bigint`.
 *
 * @template T - Type to evaluate
 */
type IsBigInt<T> = T extends bigint ? true : false

export type { IsBigInt as default }
