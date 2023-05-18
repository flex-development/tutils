/**
 * @file Type Definitions - Nullable
 * @module tutils/types/Nullable
 */

/**
 * Constructs a union type of `T` and `null`.
 *
 * @template T - Value type
 */
type Nullable<T> = T | null

export type { Nullable as default }
