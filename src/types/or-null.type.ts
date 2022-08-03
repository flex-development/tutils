/**
 * @file Type Definitions - OrNull
 * @module tutils/types/OrNull
 */

/**
 * Type representing a value that also be `null`.
 *
 * @template T - Value type
 */
type OrNull<T> = T | null

export { type OrNull as default }
