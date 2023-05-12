/**
 * @file Type Definitions - EnsureString
 * @module tutils/types/EnsureString
 */

/**
 * Ensures type `T` intersects with type `string`.
 *
 * @see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
 *
 * @template T - Type to combine with `string`
 */
type EnsureString<T> = T & string

export type { EnsureString as default }
