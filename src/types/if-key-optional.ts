/**
 * @file Type Definitions - IfOptionalKey
 * @module tutils/types/IfOptionalKey
 */

import type IsOptionalKey from './is-key-optional'
import type PropertyKey from './property-key'

/**
 * Returns a type that indicates if `K` is an optional property of `T`.
 *
 * @see {@linkcode IsOptionalKey}
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 * @template True - Type if `K` is optional property
 * @template False - Type if `K` is not optional property
 */
type IfOptionalKey<T, K extends PropertyKey, True, False> = IsOptionalKey<
  T,
  K
> extends true
  ? True
  : False

export type { IfOptionalKey as default }
