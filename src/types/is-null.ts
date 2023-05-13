/**
 * @file Type Definitions - IsNull
 * @module tutils/types/IsNull
 */

/**
 * Returns a boolean indicating if `T` extends `null`.
 *
 * @template T - Type to evaluate
 */
type IsNull<T> = T extends null ? true : false

export type { IsNull as default }
