/**
 * @file Type Definitions - Nullable
 * @module tutils/types/Nullable
 */

/**
 * Constructs a type where the value can be any type, or `null`.
 *
 * @template T - Value type
 */
type Nullable<T> = T | null

export { type Nullable as default }
