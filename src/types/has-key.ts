/**
 * @file Type Definitions - HasKey
 * @module tutils/types/HasKey
 */

import type IfNegativeInteger from './if-integer-negative'
import type IfNever from './if-never'
import type Indices from './indices'
import type Intersection from './intersection'
import type Remap from './remap'
import type Stringify from './stringify'

/**
 * Returns a boolean indicating if `K` and `keyof T` intersect.
 *
 * **Note**: If `K` and `keyof T` intersect, `K` can be used to index `T`.
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Keys to evaluate
 */
type HasKey<T, K> = IfNever<
  T,
  false,
  IfNever<
    K,
    false,
    T extends unknown
      ? K extends keyof T
        ? IfNever<
            keyof {
              [H in keyof Remap<T> as Intersection<
                T extends readonly unknown[]
                  ? Indices<T> extends infer I extends number
                    ? number extends I
                      ? H
                      : H extends I
                      ? H | IfNegativeInteger<H, never, Stringify<H>>
                      : H
                    : never
                  : H,
                K
              >]: H
            },
            false,
            true
          >
        : false
      : never
  >
>

export type { HasKey as default }
