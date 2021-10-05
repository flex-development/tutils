import type ObjectPlain from './object-plain.type'

/**
 * @file Type Definitions - Overwrite
 * @module tutils/types/Overwrite
 */

/**
 * Replaces the properties of `T` with those of `T1`.
 *
 * @template T1 - Object to update
 * @template T2 - Object to update with
 */
type Overwrite<T extends ObjectPlain, T1 extends ObjectPlain> = {
  [K in keyof T]: K extends keyof T1 ? T1[K] : T[K]
} & {}

export default Overwrite
