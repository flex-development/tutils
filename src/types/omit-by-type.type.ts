/**
 * @file Type Definitions - OmitByType
 * @module tutils/types/OmitByType
 */

import type ObjectPlain from './object-plain.type'

/**
 * Constructs a type where properties of type `P` will be omitted from `T`.
 *
 * @template T - Object type
 * @template P - Type of properties to omit
 */
type OmitByType<T extends ObjectPlain, P> = Pick<
  T,
  { [K in keyof T]: T[K] extends P ? never : K }[keyof T]
>

export default OmitByType
