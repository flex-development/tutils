/**
 * @file Type Definitions - Optional
 * @module tutils/types/Optional
 */

/**
 * Constructs a union of `T` and `undefined`.
 *
 * @template T - Type to evaluate
 */
type Optional<T> = T | undefined

export type { Optional as default }
