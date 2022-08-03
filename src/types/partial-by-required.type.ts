/**
 * @file Type Definitions - PartialByRequired
 * @module tutils/types/PartialByRequired
 */

import type ObjectPlain from './object-plain.type'

/**
 * Constructs a type where properties `K` are required, but the remaining
 * properties of `T` are optional.
 *
 * @template T - Object type
 * @template K - Required properties (top-level)
 */
type PartialByRequired<T extends ObjectPlain, K extends keyof T> = Partial<
  Omit<T, K>
> &
  Pick<T, K>

export { type PartialByRequired as default }
