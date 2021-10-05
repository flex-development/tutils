import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Type Definitions - PickByType
 * @module tutils/types/PickByType
 */

/**
 * Constructs a type where properties of type `P` will be chosen from `T`.
 *
 * @template T - Object type
 * @template P - Type of properties to pick
 */
export type PickByType<T extends ObjectPlain, P> = Pick<
  T,
  { [K in keyof T]: T[K] extends P ? K : never }[keyof T]
>
