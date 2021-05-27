import type { DeepOmit } from './DeepOmit'
import type { DeepPartial } from './DeepPartial'
import type { DeepPartialByHelper } from './DeepPartialByHelper'
import type { DeepPick } from './DeepPick'
import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Types - DeepPartialBy
 * @module types/DeepPartialBy
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
export type DeepPartialBy<
  T extends ObjectPlain,
  H extends DeepPartialByHelper<T>
> = DeepOmit<T, H['omit']> & DeepPartial<DeepPick<T, H['pick']>>
