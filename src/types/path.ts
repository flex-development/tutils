/**
 * @file Type Definitions - Path
 * @module tutils/types/Path
 */

import type BuiltIn from './built-in'
import type Dot from './dot'
import type Fn from './fn'
import type IfAny from './if-any'
import type IfIndexSignature from './if-index-signature'
import type IfNever from './if-never'
import type IfSymbol from './if-symbol'
import type Intersection from './intersection'
import type Join from './join'
import type Keyof from './keyof'
import type Length from './length'
import type Nilable from './nilable'
import type NumberString from './number-string'
import type Remap from './remap'
import type Stringify from './stringify'

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
 * @todo document enumerability tracking constraints
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
      ? Remap<T> extends infer U
        ? {
            [H in keyof U as IfSymbol<
              H,
              never,
              IfIndexSignature<
                T,
                H,
                number extends H
                  ? T extends string | readonly unknown[]
                    ? number extends Length<T>
                      ? H
                      : never
                    : H
                  : H,
                E extends true
                  ? T extends Readonly<BuiltIn>
                    ? IfNever<Intersection<H, Keyof<BuiltIn>>, H, never>
                    : H
                  : H
              >
            >]:
              | H
              | Stringify<H>
              | (U[H] extends infer V
                  ? V extends unknown
                    ? [H, V] extends [number, string]
                      ? T extends string
                        ? never
                        : Join<[Stringify<H>, Path<V, E>], Dot>
                      : Readonly<Fn> extends V
                      ? never
                      : Join<[Stringify<H>, Path<V, E>], Dot>
                    : never
                  : never)
          } extends infer X
          ? X[keyof X]
          : never
        : never
      : never
  >,
  NumberString
> extends infer P extends NumberString
  ? P
  : never

export type { Path as default }
