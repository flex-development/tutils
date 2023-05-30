/**
 * @file Type Definitions - IsRequiredKey
 * @module tutils/types/IsRequiredKey
 */

import type Get from './get'
import type IfAnyOrNever from './if-any-or-never'
import type IfEqual from './if-equal'
import type RequiredKeys from './keys-required'
import type PropertyKey from './property-key'

/**
 * Returns a boolean indicating if `K` is a required property of `T`.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 */
type IsRequiredKey<T, K extends PropertyKey> = IfAnyOrNever<
  K,
  false,
  (
    K extends `${infer H}.${infer Rest}`
      ? IsRequiredKey<Get<T, H>, Rest>
      : K extends RequiredKeys<T>
      ? true
      : false
  ) extends infer R
    ? IfEqual<R, boolean, false, R>
    : never
>

export type { IsRequiredKey as default }
