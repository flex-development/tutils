/**
 * @file Type Definitions - IsOptionalKey
 * @module tutils/types/IsOptionalKey
 */

import type IndexSignature from './index-signature'
import type OptionalKeys from './keys-optional'

/**
 * Returns a boolean indicating if `K` is an optional property of `T`.
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 */
type IsOptionalKey<T, K extends IndexSignature> = K extends OptionalKeys<T>
  ? true
  : false

export type { IsOptionalKey as default }
