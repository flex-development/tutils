/**
 * @file Type Definitions - IsExactOptionalKey
 * @module tutils/types/IsExactOptionalKey
 */

import type Dot from './dot'
import type Get from './get'
import type IfAnyOrNever from './if-any-or-never'
import type IfNever from './if-never'
import type ExactOptionalKeys from './keys-optional-exact'
import type Numeric from './numeric'
import type PropertyKey from './property-key'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Returns a boolean indicating if `K` is an exact optional property of `T`.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @see {@linkcode ExactOptionalKeys}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Keys to evaluate
 */
type IsExactOptionalKey<T, K extends PropertyKey> = IfNever<
  T,
  false,
  IfAnyOrNever<
    K,
    false,
    T extends unknown
      ? K extends `${infer H}${Dot}${infer R}`
        ? IsExactOptionalKey<NonNullable<Get<T, H>>, R>
        : ExactOptionalKeys<T> extends infer Q extends keyof T
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

export type { IsExactOptionalKey as default }
