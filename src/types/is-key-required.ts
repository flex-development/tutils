/**
 * @file Type Definitions - IsRequiredKey
 * @module tutils/types/IsRequiredKey
 */

import type Dot from './dot'
import type Get from './get'
import type IfAnyOrNever from './if-any-or-never'
import type IfIndexSignature from './if-index-signature'
import type IfNever from './if-never'
import type RequiredKeys from './keys-required'
import type Numeric from './numeric'
import type PropertyKey from './property-key'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Returns a boolean indicating if `K` is a required property of `T`.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @see {@linkcode RequiredKeys}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Keys to evaluate
 */
type IsRequiredKey<T, K extends PropertyKey> = IfNever<
  T,
  false,
  IfAnyOrNever<
    K,
    false,
    T extends unknown
      ? K extends `${infer H}${Dot}${infer R}`
        ? IsRequiredKey<NonNullable<Get<T, H>>, R>
        : IfIndexSignature<
            T,
            K,
            true,
            RequiredKeys<T> extends infer Q extends keyof T
              ? K extends Q
                ? true
                : K extends Numeric
                ? UnwrapNumeric<K> extends Q
                  ? true
                  : false
                : false
              : never
          >
      : false
  >
>

export type { IsRequiredKey as default }
