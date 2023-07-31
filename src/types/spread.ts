/**
 * @file Type Definitions - Spread
 * @module tutils/types/Spread
 */

import type At from './at'
import type BuiltIn from './built-in'
import type IfIndexSignature from './if-index-signature'
import type IfNegativeInteger from './if-negative'
import type IfNumber from './if-number'
import type Indices from './indices'
import type Intersection from './intersection'
import type IsAnyOrNever from './is-any-or-never'
import type Keyof from './keyof'
import type Objectify from './objectify'
import type Stringify from './stringify'
import type Writable from './writable'

/**
 * Construct a type representing the result of [spreading][1] `T`.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
type Spread<T> = IsAnyOrNever<T> extends true
  ? Objectify<T>
  : T extends unknown
  ? Objectify<T> &
      (T extends string
        ? { [N in Indices<T> as IfNegativeInteger<N, never, N>]: At<T, N> }
        : Objectify<never>) extends infer U
    ? Writable<{
        [H in keyof U as IfIndexSignature<
          U,
          H,
          H,
          IfNumber<
            H,
            Stringify<H>,
            T extends Readonly<BuiltIn>
              ? H extends Intersection<H, Keyof<BuiltIn>>
                ? never
                : H
              : H
          >
        >]: T extends string | readonly unknown[]
          ? number extends H
            ? At<T, H & number>
            : U[H]
          : U[H]
      }>
    : never
  : never

export type { Spread as default }
