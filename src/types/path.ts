/**
 * @file Type Definitions - Path
 * @module tutils/types/Path
 */

import type At from './at'
import type BuiltIn from './built-in'
import type Dot from './dot'
import type Fn from './fn'
import type Get from './get'
import type IfAny from './if-any'
import type IfNegative from './if-negative'
import type IfNumber from './if-number'
import type IfSymbol from './if-symbol'
import type Indices from './indices'
import type Join from './join'
import type Keyof from './keyof'
import type Length from './length'
import type Nilable from './nilable'
import type NumberString from './number-string'
import type Opaque from './opaque'
import type Primitive from './primitive'
import type PropertyKey from './property-key'
import type Stringify from './stringify'
import type Subtract from './subtract'
import type UnwrapNumeric from './unwrap-numeric'

/**
 * Constructs a union of nested and top-level property paths.
 *
 * Nested and array-indexable paths are expressed using dot notation.
 *
 * Non-enumerable property paths can be filtered out by setting `E` to `true`.
 *
 * **Note**: TypeScript does not track enumerability. Non-enumerable properties
 * are removed for {@linkcode BuiltIn} types only.
 *
 * @todo examples
 *
 * @see https://github.com/microsoft/TypeScript/issues/9726
 *
 * @template T - Type to evaluate
 * @template E - Enumerable property paths only
 */
type Path<T, E extends Nilable<boolean> = false> = Extract<
  IfAny<
    T,
    keyof T,
    T extends unknown
      ? {
          [H in keyof (T extends string
            ? number extends Length<T>
              ? Opaque<T>
              : T & {
                  [N in Stringify<Indices<T>> as IfNegative<N, never, N>]: At<
                    T,
                    N
                  >
                }
            : T extends Primitive
            ? Opaque<T>
            : T) as IfSymbol<
            H,
            never,
            E extends true
              ? T extends string | readonly unknown[]
                ? IfNumber<
                    H,
                    H,
                    H extends Keyof<unknown[] | string> ? never : H
                  >
                : T extends Readonly<Exclude<BuiltIn, Error>>
                ? H extends Keyof<Exclude<BuiltIn, Error>>
                  ? never
                  : H
                : H
              : H
          > extends infer H extends PropertyKey
            ? T extends string | readonly unknown[]
              ? number extends Length<T>
                ? H
                : number extends H
                ? never
                : H
              : H
            : never]: (
            T extends string | readonly unknown[]
              ? number extends Length<T>
                ? H
                : H extends Stringify<Indices<T>>
                ? UnwrapNumeric<H> extends infer N extends number
                  ? UnwrapNumeric<
                      Exclude<`-${Subtract<Length<Required<T>>, N>}`, '-0'>
                    > extends infer M extends number
                    ? M | N
                    : never
                  : never
                : H
              : H
          ) extends infer H extends PropertyKey
            ?
                | H
                | Stringify<H>
                | (Get<T, H> extends infer V
                    ? [H, NonNullable<V>] extends [number, string]
                      ? T extends readonly unknown[]
                        ? Path<V, E> extends infer P extends NumberString
                          ? Join<[Stringify<H>, P], Dot>
                          : never
                        : never
                      : Readonly<Fn> extends V
                      ? never
                      : Path<V, E> extends infer P extends NumberString
                      ? Join<[Stringify<H>, P], Dot>
                      : never
                    : never)
            : never
        } extends infer X
        ? X[keyof X]
        : never
      : never
  >,
  NumberString
> extends infer P extends NumberString
  ? P
  : never

export type { Path as default }
