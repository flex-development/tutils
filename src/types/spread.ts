/**
 * @file Type Definitions - Spread
 * @module tutils/types/Spread
 */

import type At from './at'
import type BuiltIn from './built-in'
import type EmptyString from './empty-string'
import type IfNumber from './if-number'
import type Intersection from './intersection'
import type IsAny from './is-any'
import type IsEqual from './is-equal'
import type IsNever from './is-never'
import type Keyof from './keyof'
import type Length from './length'
import type Objectify from './objectify'
import type Primitive from './primitive'
import type Split from './split'
import type Stringify from './stringify'
import type Writable from './writable'

/**
 * Construct the result of [spreading][1] `T`.
 *
 * The new object will contain only own enumerable properties. Of the primitive
 * values, only strings have own enumerable properties (their indices).
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 *
 * **Note**: TypeScript does not track enumerability. This type does its best to
 * remove non-enumerable properties for {@linkcode BuiltIn} types only.
 *
 * @see https://github.com/microsoft/TypeScript/issues/9726
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
type Spread<T> = IsNever<T> extends true
  ? Objectify<T>
  : T extends unknown
  ? Objectify<
      IsAny<T> extends true
        ? Record<string | symbol, T>
        : IsEqual<T, object> extends true
        ? Record<string | symbol, any>
        : T extends string
        ? Split<T, EmptyString>
        : T extends Primitive
        ? never
        : T
    > extends infer U
    ? Writable<{
        [H in keyof U as IfNumber<
          H,
          number extends H
            ? T extends readonly never[]
              ? never
              : T extends string | readonly unknown[]
              ? number extends Length<T>
                ? Stringify<H>
                : never
              : Stringify<H>
            : Stringify<H>,
          T extends Readonly<BuiltIn>
            ? H extends Intersection<H, Keyof<BuiltIn>>
              ? never
              : H
            : H
        >]: T extends string | readonly unknown[]
          ? number extends H
            ? At<T, H & number>
            : U[H]
          : U[H]
      }>
    : never
  : never

export type { Spread as default }
