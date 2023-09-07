/**
 * @file Type Definitions - Path
 * @module tutils/types/Path
 */

import type BuiltIn from './built-in'
import type Dot from './dot'
import type Fn from './fn'
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
 * Construct a union of nested and top-level property paths.
 *
 * Non-enumerable paths are included by default, but can be filtered out of the
 * resulting union.
 *
 * **Note**: TypeScript does not track enumerability. This type does its best to
 * remove non-enumerable properties for {@linkcode BuiltIn} types only.
 *
 * @see https://github.com/microsoft/TypeScript/issues/9726
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 * @template E - Enumerable property paths only
 */
type Path<T, E extends Nilable<boolean> = false> = Extract<
  T extends unknown
    // dprint-ignore
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
    : never,
  NumberString
>

export type { Path as default }
