/**
 * @file Type Definitions - IsNumber
 * @module tutils/types/IsNumber
 */

/**
 * Returns a boolean indicating if `T` extends `number`.
 *
 * @template T - Type to evaluate
 */
type IsNumber<T> = T extends number ? true : false

export type { IsNumber as default }
