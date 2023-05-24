/**
 * @file Type Definitions - OneOrMany
 * @module tutils/types/OneOrMany
 */

/**
 * Constructs a union of `T` and an array of `T` values.
 *
 * @template T - Type to evaluate
 */
type OneOrMany<T> = T | T[] | readonly T[]

export type { OneOrMany as default }
