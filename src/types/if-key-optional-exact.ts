/**
 * @file Type Definitions - IfExactOptionalKey
 * @module tutils/types/IfExactOptionalKey
 */

import type IfNever from './if-never'
import type IsExactOptionalKey from './is-key-optional-exact'
import type PropertyKey from './property-key'

/**
 * Returns a type that indicates if `K` extends an exact optional property of
 * `U`.
 *
 * @see {@linkcode IsExactOptionalKey}
 *
 * @todo examples
 *
 * @template U - Type to evaluate
 * @template K - Key to evaluate
 * @template T - Type if `K` extends exact optional property
 * @template F - Type if `K` does not extend exact optional property
 */
type IfExactOptionalKey<U, K extends PropertyKey, T, F> = IfNever<
  U,
  F,
  IfNever<
    K,
    F,
    U extends unknown
      ? K extends unknown
        ? IsExactOptionalKey<U, K> extends true
          ? T
          : F
        : F
      : F
  >
>

export type { IfExactOptionalKey as default }
