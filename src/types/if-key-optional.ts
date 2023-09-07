/**
 * @file Type Definitions - IfOptionalKey
 * @module tutils/types/IfOptionalKey
 */

import type IfNever from './if-never'
import type IsOptionalKey from './is-key-optional'
import type PropertyKey from './property-key'

/**
 * Returns a type that indicates if `K` extends an optional property of `U`.
 *
 * @see {@linkcode IsOptionalKey}
 *
 * @todo examples
 *
 * @template U - Type to evaluate
 * @template K - Key to evaluate
 * @template T - Type if `K` extends optional property
 * @template F - Type if `K` does not extend optional property
 */
type IfOptionalKey<U, K extends PropertyKey, T, F> = IfNever<
  U,
  F,
  IfNever<
    K,
    F,
    // dprint-ignore
    U extends unknown
      ? K extends unknown
        ? IsOptionalKey<U, K> extends true
          ? T
          : F
        : F
      : F
  >
>

export type { IfOptionalKey as default }
