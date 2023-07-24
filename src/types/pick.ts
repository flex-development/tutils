/**
 * @file Type Definitions - Pick
 * @module tutils/types/Pick
 */

import type IsAny from './is-any'
import type IsNever from './is-never'
import type IsNumber from './is-number'
import type IsNumeric from './is-numeric'
import type Numeric from './numeric'
import type OmitIndexSignature from './omit-index-signature'
import type PropertyKey from './property-key'
import type Remap from './remap'
import type Stringify from './stringify'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * From `T`, pick a set of properties whose keys are in the union `K`.
 *
 * Type constituents in `K` must intersect `keyof Remap<T>` or extend an index
 * signature property. When permitted by indexing, keys that are numbers and
 * numerics (e.g. `0`, `'1'`) are also allowed exact*ish* matches. This means
 * numbers can be used to select numeric properties, and vice-versa.
 *
 * @see {@linkcode Remap}
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template K - Keys to select
 */
type Pick<T, K extends PropertyKey> = IsNever<T> extends true
  ? Remap<T>
  : T extends unknown
  ? Remap<T> extends infer U
    ? IsAny<K> extends true
      ? U
      : (
          K extends keyof U
            ? K
            : IsNumber<K> extends true
            ? Stringify<K> extends infer N extends Numeric
              ? N extends keyof OmitIndexSignature<U>
                ? N
                : never
              : never
            : IsNumeric<K> extends true
            ? UnwrapNumeric<K> extends infer N extends number
              ? N extends keyof U
                ? N
                : never
              : never
            : never
        ) extends infer Q extends keyof U
      ? { [H in Q]: U[H] }
      : never
    : never
  : never

export type { Pick as default }
