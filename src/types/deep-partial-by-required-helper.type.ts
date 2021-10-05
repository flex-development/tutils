import type ObjectPlain from './object-plain.type'
import type Path from './path.type'

/**
 * @file Type Definitions - DeepPartialByRequiredHelper
 * @module tutils/types/DeepPartialByHelper
 */

/**
 * `DeepPartialByRequired` helper.
 *
 * @template T - Object type
 * @template P - Required object field paths
 * @template F - Object field path filter object. Omits fields
 *
 * @example
 *  interface IPerson { ... }
 *  type Helper = DeepPartialByHelper<IPerson, 'firstName', { age: never }>
 */
type DeepPartialByRequiredHelper<
  T extends ObjectPlain,
  P extends Path<T>,
  F extends Partial<Record<Path<T>, never>> = {}
> = {
  omit: F
  pick: P
}

export default DeepPartialByRequiredHelper
