/**
 * @file Type Definitions - IsOptionalKey
 * @module tutils/types/IsOptionalKey
 */

import type Dot from './dot'
import type Get from './get'
import type IsAnyOrNever from './is-any-or-never'
import type IsNever from './is-never'
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
// dprint-ignore
type IsOptionalKey<T, K extends PropertyKey> = IsNever<T> extends true
  ? false
  : IsAnyOrNever<K> extends true
  ? false
  : T extends unknown
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

export type { IsOptionalKey as default }
