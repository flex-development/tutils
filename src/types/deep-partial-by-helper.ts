/**
 * @file Type Definitions - DeepPartialByHelper
 * @module tutils/types/DeepPartialByHelper
 */

import type ObjectPlain from './object-plain'
import type Path from './path'

/**
 * `DeepPartialBy` helper.
 *
 * @template T - Object type
 * @template F - Object field path filter object. Makes fields optional
 *
 * @example
 *  interface IPerson { ... }
 *  type DTOHelper = DeepPartialByHelper<IPerson, { id: never  }>
 */
type DeepPartialByHelper<
  T extends ObjectPlain,
  F extends Partial<Record<Path<T>, never>> = {}
> = {
  omit: F
  pick: Path<T> /* Path<F> => excessively deep and possibly infinite */
}

export { type DeepPartialByHelper as default }
