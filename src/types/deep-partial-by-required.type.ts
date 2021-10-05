import type DeepOmit from './deep-omit.type'
import type DeepPartialByRequiredHelper from './deep-partial-by-required-helper.type'
import type DeepPartial from './deep-partial.type'
import type DeepPick from './deep-pick.type'
import type ObjectPlain from './object-plain.type'
import type Path from './path.type'

/**
 * @file Type Definitions - DeepPartialByRequired
 * @module tutils/types/DeepPartialByRequired
 */

/**
 * Constructs a type where properties `H['pick']` will become required, and
 * properties `H['omit']` will be omitted.
 *
 * Other properties will remain untouched.
 *
 * @template T - Object type
 * @template H - `DeepPartialByRequiredHelper<T, string, { [x:string]: never }>`
 *
 * @example
 *  interface IPerson { ... }
 *  type Helper = DeepPartialByRequiredHelper<IPerson, 'name', { id: never  }>
 *  type PatchPersonDTO = DeepPartialBy<IPerson, DTOHelper>
 */
type DeepPartialByRequired<
  T extends ObjectPlain,
  H extends DeepPartialByRequiredHelper<T, Path<T>>
> = DeepPick<T, H['pick']> & DeepPartial<DeepOmit<T, H['omit']>>

export default DeepPartialByRequired
