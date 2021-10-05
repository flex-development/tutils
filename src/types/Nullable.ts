/**
 * @file Type Definitions - Nullable
 * @module tutils/types/Nullable
 */

/**
 * Constructs a type where the value can be any type, or `null`.
 *
 * @template T - Value type
 */
export type Nullable<T> = T | null
