/**
 * @file Type Definitions - OneOrMany
 * @module tutils/types/OneOrMany
 */

/**
 * Constructs a union of `T` and an array of `T` values.
 *
 * @example
 *  type X = OneOrMany<string>
 *  // string | readonly string[]
 *
 * @template T - Type to evaluate
 */
type OneOrMany<T> = T | readonly T[]

export type { OneOrMany as default }
