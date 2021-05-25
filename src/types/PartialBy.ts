import type { DeepPartial } from './DeepPartial'
import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Types - PartialBy
 * @module types/PartialBy
 */

/**
 * Constructs a type where properties `K` are omitted and the remaining
 * properties of `T` are optional.
 *
 * @template T - Object type
 * @template K - Object fields (top level) to omit
 */
export type PartialBy<T extends ObjectPlain, K extends keyof T> = Omit<T, K> &
  DeepPartial<Pick<T, K>>
