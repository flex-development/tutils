/**
 * @file Type Definitions - IfReadonlyKey
 * @module tutils/types/IfReadonlyKey
 */

import type IfNever from './if-never'
import type IsReadonlyKey from './is-key-readonly'
import type PropertyKey from './property-key'

/**
 * Returns a type that indicates if `K` extends a readonly property of `U`.
 *
 * @see {@linkcode IsReadonlyKey}
 *
 * @todo examples
 *
 * @template U - Type to evaluate
 * @template K - Key to evaluate
 * @template T - Type if `K` extends readonly property
 * @template F - Type if `K` does not extend readonly property
 */
type IfReadonlyKey<U, K extends PropertyKey, T, F> = IfNever<
  U,
  F,
  IfNever<
    K,
    F,
    U extends unknown
      ? K extends unknown
        ? IsReadonlyKey<U, K> extends true
          ? T
          : F
        : F
      : F
  >
>

export type { IfReadonlyKey as default }
