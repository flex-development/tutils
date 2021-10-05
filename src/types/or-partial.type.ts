import type DeepPartial from './deep-partial.type'

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
type OrPartial<T> = T | DeepPartial<T>

export default OrPartial
