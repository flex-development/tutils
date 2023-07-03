/**
 * @file Type Definitions - Nullable
 * @module tutils/types/Nullable
 */

/**
 * Constructs a union of `T` and `null`.
 *
 * @example
 *  type X = Nullable<string>
 *  // string | null
 *
 * @template T - Type to evaluate
 */
type Nullable<T> = T | null

export type { Nullable as default }
