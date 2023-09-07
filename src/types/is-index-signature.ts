/**
 * @file Type Definitions - IsIndexSignature
 * @module tutils/types/IsIndexSignature
 */

import type IfAnyOrNever from './if-any-or-never'
import type IfEqual from './if-equal'
import type IfNever from './if-never'
import type Objectify from './objectify'
import type PropertyKey from './property-key'

/**
 * Returns a boolean indicating if `K` is an index signature property of `T`.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Key to evaluate
 */
type IsIndexSignature<T, K extends PropertyKey> = IfNever<
  T,
  false,
  IfAnyOrNever<
    K,
    false,
    // dprint-ignore
    T extends unknown
      ? K extends PropertyKey
        ? {
            [H in keyof Objectify<T> as H extends keyof Object
              ? never
              : {} extends Record<H, unknown>
              ? K extends H
                ? IfEqual<H, K, H, never>
                : never
              : never]: H
          } extends infer X
          ? K extends keyof X
            ? true
            : false
          : never
        : false
      : never
  >
>

export type { IsIndexSignature as default }
