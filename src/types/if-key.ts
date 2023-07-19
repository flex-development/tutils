/**
 * @file Type Definitions - IfKey
 * @module tutils/types/IfKey
 */

import type HasKey from './has-key'
import type IfNever from './if-never'

/**
 * Returns a type that indicates if `K` and `keyof T` intersect.
 *
 * **Note**: If `K` and `keyof T` intersect, `K` can be used to index `T`.
 *
 * @see {@linkcode HasKey}
 *
 * @todo examples
 *
 * @template U - Type to evaluate
 * @template K - Keys to evaluate
 * @template T - Type if `K` and `keyof T` intersect
 * @template F - Type if `K` and `keyof T` do not intersect
 */
type IfKey<U, K, T, F> = IfNever<
  U,
  F,
  U extends unknown
    ? K extends unknown
      ? HasKey<U, K> extends true
        ? T
        : F
      : F
    : F
>

export type { IfKey as default }
