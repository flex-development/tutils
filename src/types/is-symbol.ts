/**
 * @file Type Definitions - IsSymbol
 * @module tutils/types/IsSymbol
 */

/**
 * Returns a boolean indicating if `T` extends `symbol`.
 *
 * @template T - Type to evaluate
 */
type IsSymbol<T> = T extends symbol ? true : false

export type { IsSymbol as default }
