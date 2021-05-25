import type { DeepPartial } from './DeepPartial'
import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Types - PartialByRequired
 * @module types/PartialByRequired
 */

/**
 * Constructs a type where properties `K` are required, but the remaining
 * properties of `T` are optional.
 *
 * @template T - Object type
 * @template K - Object fields (top level) to pick
 */
export type PartialByRequired<T extends ObjectPlain, K extends keyof T> = Pick<
  T,
  K
> &
  DeepPartial<Omit<T, K>>
