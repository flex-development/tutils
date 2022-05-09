/**
 * @file Type Definitions - Overwrite
 * @module tutils/types/Overwrite
 */

import type ObjectPlain from './object-plain.type'

/**
 * Replaces existing properties in `Obj` with those in `DTO`.
 *
 * @template Obj - Object to update
 * @template DTO - Object to update with
 */
type Overwrite<Obj extends ObjectPlain, DTO extends ObjectPlain> =
  & {
    [K in keyof Obj]: K extends keyof DTO ? DTO[K] : Obj[K]
  }
  & {}

export default Overwrite
