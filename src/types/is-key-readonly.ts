/**
 * @file Type Definitions - IsReadonlyKey
 * @module tutils/types/IsReadonlyKey
 */

import type Dot from './dot'
import type Get from './get'
import type IsAnyOrNever from './is-any-or-never'
import type IsNever from './is-never'
import type ReadonlyKeys from './keys-readonly'
import type Numeric from './numeric'
import type PropertyKey from './property-key'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Returns a boolean indicating if `K` is a readonly property of `T`.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @see {@linkcode ReadonlyKeys}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Keys to evaluate
 */
type IsReadonlyKey<T, K extends PropertyKey> = IsNever<T> extends true
  ? false
  : IsAnyOrNever<K> extends true
  ? false
  : T extends unknown
  ? K extends `${infer H}${Dot}${infer R}`
    ? IsReadonlyKey<NonNullable<Get<T, H>>, R>
    : ReadonlyKeys<T> extends infer Q extends keyof T
    ? K extends Q
      ? true
      : K extends Numeric
      ? UnwrapNumeric<K> extends Q
        ? true
        : false
      : T extends unknown[]
      ? false
      : T extends readonly unknown[]
      ? number extends K
        ? true
        : false
      : false
    : never
  : false

export type { IsReadonlyKey as default }
