import type DeepOmit from './deep-omit.type'
import type DeepPartialByHelper from './deep-partial-by-helper.type'
import type DeepPartial from './deep-partial.type'
import type DeepPick from './deep-pick.type'
import type ObjectPlain from './object-plain.type'

/**
 * @file Type Definitions - DeepPartialBy
 * @module tutils/types/DeepPartialBy
 */

/**
 * Constructs a type where properties `H['omit']` will become optional.
 *
 * Other properties will remain untouched.
 *
 * @template T - Object type
 * @template H - `DeepPartialByHelper<T, { [x:string]: never }>`
 *
 * @example
 *  interface IPerson { ... }
 *  type DTOHelper = DeepPartialByHelper<IPerson, { id: never  }>
 *  type CreatePersonDTO = DeepPartialBy<IPerson, DTOHelper>
 */
type DeepPartialBy<
  T extends ObjectPlain,
  H extends DeepPartialByHelper<T>
> = DeepOmit<T, H['omit']> & DeepPartial<DeepPick<T, H['pick']>>

export default DeepPartialBy
