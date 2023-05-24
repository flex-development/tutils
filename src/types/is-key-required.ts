/**
 * @file Type Definitions - IsRequiredKey
 * @module tutils/types/IsRequiredKey
 */

import type IndexSignature from './index-signature'
import type RequiredKeys from './keys-required'

/**
 * Returns a boolean indicating if `K` is a required property of `T`.
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 */
type IsRequiredKey<T, K extends IndexSignature> = K extends RequiredKeys<T>
  ? true
  : false

export type { IsRequiredKey as default }
