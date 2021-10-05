import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Type Definitions - PartialBy
 * @module tutils/types/PartialBy
 */

/**
 * Constructs a type where properties of `K` will become optional.
 *
 * Other properties will remain untouched.
 *
 * @template T - Object type
 * @template K - Optional properties (top-level)
 */
export type PartialBy<T extends ObjectPlain, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>
