import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Types - Overwrite
 * @module types/Overwrite
 */

/**
 * Replaces the properties of `T` with those of `T1`.
 *
 * @template T1 - Object to update
 * @template T2 - Object to update with
 */
export type Overwrite<T extends ObjectPlain, T1 extends ObjectPlain> = {
  [K in keyof T]: K extends keyof T1 ? T1[K] : T[K]
} & {}
