/**
 * @file Type Definitions - HasKey
 * @module tutils/types/HasKey
 */

import type IfNumber from './if-number'
import type IfNumeric from './if-numeric'
import type Intersection from './intersection'
import type IsNever from './is-never'
import type Numeric from './numeric'
import type NegativeNumeric from './numeric-negative'
import type PropertyKey from './property-key'
import type Remap from './remap'
import type Stringify from './stringify'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Returns a boolean indicating if `K` is explicitly defined on `T`.
 *
 * Type constituents in `K` must intersect `keyof Remap<T>`. When permitted by
 * indexing, property keys that are numbers and numerics (e.g. `0`, `'1'`) are
 * also allowed exact*ish* matches.
 *
 * @see {@linkcode Remap}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Keys to evaluate
 */
type HasKey<T, K> = IsNever<T> extends true
  ? false
  : IsNever<K> extends true
  ? false
  : T extends unknown
  ? K extends PropertyKey
    ? IsNever<
        keyof {
          [H in keyof Remap<T> as Intersection<
            IfNumber<
              H,
              H | Stringify<H>,
              IfNumeric<
                H,
                NegativeNumeric extends H
                  ? H
                  : Numeric extends H
                  ? H
                  : H | UnwrapNumeric<H>,
                H
              >
            >,
            K
          >]: H
        }
      > extends true
      ? false
      : true
    : false
  : never

export type { HasKey as default }
