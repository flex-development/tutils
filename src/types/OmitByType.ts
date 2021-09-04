import type { ObjectPlain } from './ObjectPlain'

/**
 * @file Types - OmitByType
 * @module types/OmitByType
 */

/**
 * Constructs a type where properties of type `P` will be omitted from `T`.
 *
 * @template T - Object type
 * @template P - Type of properties to omit
 */
export type OmitByType<T extends ObjectPlain, P> = Pick<
  T,
  { [K in keyof T]: T[K] extends P ? never : K }[keyof T]
>