/**
 * @file Type Definitions - IsOptionalKey
 * @module tutils/types/IsOptionalKey
 */

import type OptionalKeys from './keys-optional'
import type PropertyKey from './property-key'

/**
 * Returns a boolean indicating if `K` is an optional property of `T`.
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 */
type IsOptionalKey<T, K extends PropertyKey> = K extends OptionalKeys<T>
  ? true
  : false

export type { IsOptionalKey as default }
