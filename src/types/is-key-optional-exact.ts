/**
 * @file Type Definitions - IsExactOptionalKey
 * @module tutils/types/IsExactOptionalKey
 */

import type IfEqual from './if-equal'
import type IfOptionalKey from './if-key-optional'
import type IndexSignature from './index-signature'

/**
 * Returns a boolean indicating if `K` is an exact optional property of `T`.
 *
 * @see https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 */
type IsExactOptionalKey<T, K extends IndexSignature> = IfOptionalKey<
  T,
  K,
  Required<T>[K & keyof T] extends infer V
    ? IfEqual<V, V | undefined, false, true>
    : false,
  false
>

export type { IsExactOptionalKey as default }
