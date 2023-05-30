/**
 * @file Type Definitions - IsExactOptionalKey
 * @module tutils/types/IsExactOptionalKey
 */

import type Get from './get'
import type IfAnyOrNever from './if-any-or-never'
import type IfEqual from './if-equal'
import type IfOptionalKey from './if-key-optional'
import type PropertyKey from './property-key'

/**
 * Returns a boolean indicating if `K` is an exact optional property of `T`.
 *
 * Supports dot-notation for nested paths and array indexing.
 *
 * @see https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 */
type IsExactOptionalKey<T, K extends PropertyKey> = IfAnyOrNever<
  K,
  false,
  (
    K extends `${infer H}.${infer Rest}`
      ? IsExactOptionalKey<T[H & keyof T], Rest>
      : NonNullable<T> extends infer U
      ? IfOptionalKey<
          U,
          K,
          Get<Required<U>, K> extends infer V
            ? IfEqual<V, V | undefined, false, true>
            : false,
          false
        >
      : false
  ) extends infer R
    ? IfEqual<R, boolean, false, R>
    : never
>

export type { IsExactOptionalKey as default }
