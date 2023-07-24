/**
 * @file Type Definitions - IsExactOptionalKey
 * @module tutils/types/IsExactOptionalKey
 */

import type Dot from './dot'
import type Get from './get'
import type IsAnyOrNever from './is-any-or-never'
import type IsNever from './is-never'
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
type IsExactOptionalKey<T, K extends PropertyKey> = IsNever<T> extends true
  ? false
  : IsAnyOrNever<K> extends true
  ? false
  : T extends unknown
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

export type { IsExactOptionalKey as default }
