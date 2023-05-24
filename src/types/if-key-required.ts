/**
 * @file Type Definitions - IfRequiredKey
 * @module tutils/types/IfRequiredKey
 */

import type IndexSignature from './index-signature'
import type IsRequiredKey from './is-key-required'

/**
 * Conditional type that resolves depending on whether or not `K` is a required
 * property of `T`.
 *
 * @see {@linkcode IsRequiredKey}
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 * @template True - Type if `K` is required property
 * @template False - Type if `K` is not required property
 */
type IfRequiredKey<T, K extends IndexSignature, True, False> = IsRequiredKey<
  T,
  K
> extends true
  ? True
  : False

export type { IfRequiredKey as default }
