/**
 * @file Type Definitions - IsAny
 * @module tutils/types/IsAny
 */

/**
 * Returns a boolean indicating if `T` is type `any`.
 *
 * @template T - Type to evaluate
 */
type IsAny<T> = 0 extends T & 1 ? true : false

export type { IsAny as default }
