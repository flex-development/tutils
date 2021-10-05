import type DeepPartial from './deep-partial.type'

/**
 * @file Type Definitions - OrDeepPartial
 * @module tutils/types/OrDeepPartial
 */

/**
 * Constructs a type representing all properties of `T` or recursively, a subset
 * of properties.
 *
 * @template T - Value type
 */
type OrDeepPartial<T> = T | DeepPartial<T>

export default OrDeepPartial
