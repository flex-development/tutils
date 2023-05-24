/**
 * @file Type Definitions - IfExactOptionalKey
 * @module tutils/types/IfExactOptionalKey
 */

import type IndexSignature from './index-signature'
import type IsExactOptionalKey from './is-key-optional-exact'

/**
 * Conditional type that resolves depending on whether or not `K` is an exact
 * optional property of `T`.
 *
 * @see {@linkcode IsExactOptionalKey}
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 * @template True - Type if `K` is exact optional property
 * @template False - Type if `K` is not exact optional property
 */
type IfExactOptionalKey<
  T,
  K extends IndexSignature,
  True,
  False
> = IsExactOptionalKey<T, K> extends true ? True : False

export type { IfExactOptionalKey as default }
