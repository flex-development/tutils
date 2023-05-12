/**
 * @file Type Definitions - Get
 * @module tutils/types/Get
 */

import type IndexSignature from './index-signature'
import type Primitive from './primitive'

/**
 * Retrieves a property value type from `T`.
 *
 * Supports dot-notation.
 *
 * @template T - Type to evaluate
 * @template P - Properties to select
 */
type Get<T, K extends IndexSignature> = T extends Exclude<Primitive, string>
  ? never
  : K extends `${infer U extends string}.${infer Rest}`
  ? Get<T[U & keyof T], Rest>
  : T[K & keyof T]

export type { Get as default }
