/**
 * @file Type Definitions - Omit
 * @module tutils/types/Omit
 */

import type IfAny from './if-any'
import type IfNever from './if-never'
import type Intersection from './intersection'
import type IsNever from './is-never'
import type Objectify from './objectify'
import type PropertyKey from './property-key'

/**
 * From `T`, omit a set of properties whose keys are in the union `K`.
 *
 * Property keys in `K` must **intersect** `keyof T`. {@linkcode Intersection}
 * is used to filter keys, rather than {@linkcode Exclude}.
 *
 * @see https://github.com/microsoft/TypeScript/issues/30825
 * @see https://github.com/microsoft/TypeScript/issues/53169
 *
 * @todo examples
 * @todo support dot-notation keys
 *
 * @template T - Type to evaluate
 * @template K - Properties to remove
 */
type Omit<T, K extends PropertyKey> = IsNever<T> extends true
  ? Objectify<T>
  : T extends unknown
  ? Objectify<T> extends infer U
    ? {
        [H in keyof U as IfNever<
          Intersection<IfAny<K, H, K>, H>,
          H,
          never
        >]: U[H]
      }
    : never
  : never

export type { Omit as default }
