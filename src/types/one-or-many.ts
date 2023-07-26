/**
 * @file Type Definitions - OneOrMany
 * @module tutils/types/OneOrMany
 */

/**
 * Constructs a union of `T` and a writable array of `T` values.
 *
 * @example
 *  type X = OneOrMany<string>
 *  // string | string[]
 *
 * @template T - Type to evaluate
 */
type OneOrMany<T> = T | T[]

export type { OneOrMany as default }
