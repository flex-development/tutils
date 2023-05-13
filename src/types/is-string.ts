/**
 * @file Type Definitions - IsString
 * @module tutils/types/IsString
 */

/**
 * Returns a boolean indicating if `T` extends `string`.
 *
 * @template T - Type to evaluate
 */
type IsString<T> = T extends string ? true : false

export type { IsString as default }
