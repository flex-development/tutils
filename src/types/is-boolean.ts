/**
 * @file Type Definitions - IsBoolean
 * @module tutils/types/IsBoolean
 */

/**
 * Returns a boolean indicating if `T` extends `boolean`.
 *
 * @template T - Type to evaluate
 */
type IsBoolean<T> = T extends boolean ? true : false

export type { IsBoolean as default }
