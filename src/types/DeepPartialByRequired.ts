import type { DeepOmit } from './DeepOmit'
import type { DeepPartial } from './DeepPartial'
import type { DeepPartialByRequiredHelper } from './DeepPartialByRequiredHelper'
import type { DeepPick } from './DeepPick'
import type { ObjectPlain } from './ObjectPlain'
import type { Path } from './Path'

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
export type DeepPartialByRequired<
  T extends ObjectPlain,
  H extends DeepPartialByRequiredHelper<T, Path<T>>
> = DeepPick<T, H['pick']> & DeepPartial<DeepOmit<T, H['omit']>>
