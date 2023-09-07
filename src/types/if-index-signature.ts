/**
 * @file Type Definitions - IfIndexSignature
 * @module tutils/types/IfIndexSignature
 */

import type IfNever from './if-never'
import type IsIndexSignature from './is-index-signature'
import type PropertyKey from './property-key'

/**
 * Returns a type that indicates if `K` is an index signature of `U`.
 *
 * @see {@linkcode IsIndexSignature}
 *
 * @todo examples
 *
 * @template U - Type to evaluate
 * @template K - Key to evaluate
 * @template T - Type if `K` is index signature
 * @template F - Type if `K` is not index signature
 */
type IfIndexSignature<U, K extends PropertyKey, T, F> = IfNever<
  U,
  F,
  IfNever<
    K,
    F,
    // dprint-ignore
    U extends unknown
      ? K extends unknown
        ? IsIndexSignature<U, K> extends true
          ? T
          : F
        : F
      : F
  >
>

export type { IfIndexSignature as default }
