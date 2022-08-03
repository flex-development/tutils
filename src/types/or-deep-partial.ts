/**
 * @file Type Definitions - OrDeepPartial
 * @module tutils/types/OrDeepPartial
 */

import type DeepPartial from './deep-partial'

/**
 * Constructs a type representing all properties of `T` or recursively, a subset
 * of properties.
 *
 * @template T - Value type
 */
type OrDeepPartial<T> = DeepPartial<T> | T

export { type OrDeepPartial as default }
