/**
 * @file Type Definitions - IfExactOptionalKey
 * @module tutils/types/IfExactOptionalKey
 */

import type IsExactOptionalKey from './is-key-optional-exact'
import type PropertyKey from './property-key'

/**
 * Returns a type that indicates if `K` is an exact optional property of `T`.
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
  K extends PropertyKey,
  True,
  False
> = IsExactOptionalKey<T, K> extends true ? True : False

export type { IfExactOptionalKey as default }
