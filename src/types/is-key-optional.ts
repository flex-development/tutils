/**
 * @file Type Definitions - IsOptionalKey
 * @module tutils/types/IsOptionalKey
 */

import type Get from './get'
import type IfAnyOrNever from './if-any-or-never'
import type IfEqual from './if-equal'
import type OptionalKeys from './keys-optional'
import type PropertyKey from './property-key'

/**
 * Returns a boolean indicating if `K` is an optional property of `T`.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 */
type IsOptionalKey<T, K extends PropertyKey> = IfAnyOrNever<
  K,
  false,
  (
    K extends `${infer H}.${infer Rest}`
      ? IsOptionalKey<Get<T, H>, Rest>
      : K extends OptionalKeys<T>
      ? true
      : false
  ) extends infer R
    ? IfEqual<R, boolean, false, R>
    : never
>

export type { IsOptionalKey as default }
