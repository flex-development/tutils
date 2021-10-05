import type ObjectPlain from './object-plain.type'

/**
 * @file Type Definitions - PartialByRequired
 * @module tutils/types/PartialByRequired
 */

/**
 * Constructs a type where properties `K` are required, but the remaining
 * properties of `T` are optional.
 *
 * @template T - Object type
 * @template K - Required properties (top-level)
 */
type PartialByRequired<T extends ObjectPlain, K extends keyof T> = Pick<T, K> &
  Partial<Omit<T, K>>

export default PartialByRequired
