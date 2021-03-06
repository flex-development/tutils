/**
 * @file Type Definitions - DeepPartialBy
 * @module tutils/types/DeepPartialBy
 */

import type DeepOmit from './deep-omit.type'
import type Helper from './deep-partial-by-helper.type'
import type DeepPartial from './deep-partial.type'
import type DeepPick from './deep-pick.type'
import type ObjectPlain from './object-plain.type'

/**
 * Constructs a type where properties `H['omit']` will become optional.
 *
 * Other properties will remain untouched.
 *
 * @template T - Object type
 * @template H - `Helper<T, { [x:string]: never }>`
 *
 * @example
 *  interface IPerson { ... }
 *  type DTOHelper = Helper<IPerson, { id: never  }>
 *  type CreatePersonDTO = DeepPartialBy<IPerson, DTOHelper>
 */
type DeepPartialBy<
  T extends ObjectPlain,
  H extends Helper<T>
> = DeepOmit<T, H['omit']> & DeepPartial<DeepPick<T, H['pick']>>

export default DeepPartialBy
