/**
 * @file Type Definitions - Overwrite
 * @module tutils/types/Overwrite
 */

import type ObjectPlain from './object-plain'

/**
 * Replaces existing properties in object `U` with properties in object `D`.
 *
 * @template U - Object to update
 * @template D - Data transfer object
 */
type Overwrite<U extends ObjectPlain, D extends ObjectPlain> = {
  [K in keyof U]: K extends keyof D ? D[K] : U[K]
} & {}

export type { Overwrite as default }
