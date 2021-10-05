import type { DeepPartial } from './DeepPartial'

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
export type OrPartial<T> = T | DeepPartial<T>
