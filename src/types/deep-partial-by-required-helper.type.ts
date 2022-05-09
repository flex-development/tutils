/**
 * @file Type Definitions - DeepPartialByRequiredHelper
 * @module tutils/types/DeepPartialByHelper
 */

import type ObjectPlain from './object-plain.type'
import type Path from './path.type'

/**
 * `DeepPartialByRequired` helper.
 *
 * @template T - Object type
 * @template P - Required object field paths
 * @template F - Object field path filter object. Omits fields
 *
 * @example
 *  interface IPerson { ... }
 *
 *  type DTOHelper = DeepPartialByRequiredHelper<IPerson, 'name', { age: never }>
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
