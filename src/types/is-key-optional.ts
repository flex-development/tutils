/**
 * @file Type Definitions - IsOptionalKey
 * @module tutils/types/IsOptionalKey
 */

import type Dot from './dot'
import type Get from './get'
import type IfAnyOrNever from './if-any-or-never'
import type IfNever from './if-never'
import type OptionalKeys from './keys-optional'
import type Numeric from './numeric'
import type PropertyKey from './property-key'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Returns a boolean indicating if `K` is an optional property of `T`.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @see {@linkcode OptionalKeys}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Keys to evaluate
 */
type IsOptionalKey<T, K extends PropertyKey> = IfNever<
  T,
  false,
  IfAnyOrNever<
    K,
    false,
    T extends unknown
      ? K extends `${infer H}${Dot}${infer R}`
        ? IsOptionalKey<NonNullable<Get<T, H>>, R>
        : OptionalKeys<T> extends infer Q extends keyof T
        ? K extends Q
          ? true
          : K extends Numeric
          ? UnwrapNumeric<K> extends Q
            ? true
            : false
          : false
        : never
      : false
  >
>

export type { IsOptionalKey as default }
