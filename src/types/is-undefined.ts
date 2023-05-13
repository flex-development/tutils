/**
 * @file Type Definitions - IsUndefined
 * @module tutils/types/IsUndefined
 */

/**
 * Returns a boolean indicating if `T` extends `undefined`.
 *
 * @template T - Type to evaluate
 */
type IsUndefined<T> = T extends undefined ? true : false

export type { IsUndefined as default }
