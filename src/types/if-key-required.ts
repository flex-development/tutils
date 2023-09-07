/**
 * @file Type Definitions - IfRequiredKey
 * @module tutils/types/IfRequiredKey
 */

import type IfNever from './if-never'
import type IsRequiredKey from './is-key-required'
import type PropertyKey from './property-key'

/**
 * Returns a type that indicates if `K` extends a required property of `U`.
 *
 * @see {@linkcode IsRequiredKey}
 *
 * @todo examples
 *
 * @template U - Type to evaluate
 * @template K - Key to evaluate
 * @template T - Type if `K` extends required property
 * @template F - Type if `K` does not extend required property
 */
type IfRequiredKey<U, K extends PropertyKey, T, F> = IfNever<
  U,
  F,
  IfNever<
    K,
    F,
    // dprint-ignore
    U extends unknown
      ? K extends unknown
        ? IsRequiredKey<U, K> extends true
          ? T
          : F
        : F
      : F
  >
>

export type { IfRequiredKey as default }
