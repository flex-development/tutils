/**
 * @file Type Definitions - PartialBy
 * @module tutils/types/PartialBy
 */

import type ObjectPlain from './object-plain.type'

/**
 * Constructs a type where properties of `K` will become optional.
 *
 * Other properties will remain untouched.
 *
 * @template T - Object type
 * @template K - Optional properties (top-level)
 */
type PartialBy<T extends ObjectPlain, K extends keyof T> =
  & Omit<T, K>
  & Partial<Pick<T, K>>

export default PartialBy
