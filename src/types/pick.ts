/**
 * @file Type Definitions - Pick
 * @module tutils/types/Pick
 */

import type IfAny from './if-any'
import type IfNever from './if-never'
import type IfNumber from './if-number'
import type IfNumeric from './if-numeric'
import type Intersection from './intersection'
import type IsAny from './is-any'
import type IsNever from './is-never'
import type Numeric from './numeric'
import type NegativeNumeric from './numeric-negative'
import type PropertyKey from './property-key'
import type Remap from './remap'
import type Stringify from './stringify'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * From `T`, pick a set of properties whose keys are in the union `K`.
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
 * @template K - Keys to select
 */
type Pick<T, K extends PropertyKey> = IsAny<T> extends true
  ? { [H in K]: T }
  : IsNever<T> extends true
  ? Remap<T>
  : T extends unknown
  ? Remap<T> extends infer U
    ? {
        [H in keyof U as IfAny<
          K,
          H,
          IfNever<
            Intersection<
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
            >,
            never,
            H
          >
        >]: U[H]
      }
    : never
  : never

export type { Pick as default }
