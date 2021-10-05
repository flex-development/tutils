/**
 * @file Type Definitions - OrPartial
 * @module tutils/types/OrPartial
 */

/**
 * Constructs a type representing all properties of `T` or recursively, a subset
 * of properties.
 *
 * @template T - Value type
 */
type OrPartial<T> = T | Partial<T>

export default OrPartial
