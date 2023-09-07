/**
 * @file Type Definitions - Omit
 * @module tutils/types/Omit
 */

import type IfAny from './if-any'
import type IfNever from './if-never'
import type IfNumber from './if-number'
import type IfNumeric from './if-numeric'
import type Intersection from './intersection'
import type IsNever from './is-never'
import type Numeric from './numeric'
import type NegativeNumeric from './numeric-negative'
import type Objectify from './objectify'
import type PropertyKey from './property-key'
import type Stringify from './stringify'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * From `T`, omit a set of properties whose keys are in the union `K`.
 *
 * Type constituents in `K` must intersect `keyof Objectify<T>`. When permitted
 * by indexing, property keys that are numbers and numerics (e.g. `0`, `'1'`)
 * are also allowed exact*ish* matches.
 *
 * @see {@linkcode Intersection}
 * @see {@linkcode Objectify}
 *
 * @see https://github.com/microsoft/TypeScript/issues/30825
 * @see https://github.com/microsoft/TypeScript/issues/53169
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Properties to remove
 */
// dprint-ignore
type Omit<T, K extends PropertyKey> = IsNever<T> extends true
  ? Objectify<T>
  : T extends unknown
  ? Objectify<T> extends infer U
    ? {
        [H in keyof U as IfAny<
          K,
          never,
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
            H,
            never
          >
        >]: U[H]
      }
    : never
  : never

export type { Omit as default }
