/**
 * @file Type Definitions - IsNever
 * @module tutils/types/IsNever
 */

/**
 * Returns a boolean indicating if `T` is `never`.
 *
 * @template T - Type to evaluate
 */
type IsNever<T> = [T] extends [never] ? true : false

export type { IsNever as default }
