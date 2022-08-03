/**
 * @file Type Definitions - DeepPartialByRequired
 * @module tutils/types/DeepPartialByRequired
 */

import type DeepOmit from './deep-omit.type'
import type Helper from './deep-partial-by-required-helper.type'
import type DeepPartial from './deep-partial.type'
import type DeepPick from './deep-pick.type'
import type ObjectPlain from './object-plain.type'
import type Path from './path.type'

/**
 * Constructs a type where properties `H['pick']` will become required, and
 * properties `H['omit']` will be omitted.
 *
 * Other properties will remain untouched.
 *
 * @template T - Object type
 * @template H - `Helper<T, string, { [x: string]: never }>`
 *
 * @example
 *  interface IPerson { ... }
 *
 *  type DTOHelper = Helper<IPerson, 'name', { id: never  }>
 *  type PatchPersonDTO = DeepPartialBy<IPerson, DTOHelper>
 */
type DeepPartialByRequired<
  T extends ObjectPlain,
  H extends Helper<T, Path<T>>
> = DeepPartial<DeepOmit<T, H['omit']>> & DeepPick<T, H['pick']>

export { type DeepPartialByRequired as default }
