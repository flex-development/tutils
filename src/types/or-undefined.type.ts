/**
 * @file Type Definitions - OrUndefined
 * @module tutils/types/OrUndefined
 */

/**
 * Type representing a value that also be `undefined`.
 *
 * @template T - Value type
 */
type OrUndefined<T> = T | undefined

export default OrUndefined
