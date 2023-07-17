/**
 * @file Type Definitions - Objectify
 * @module tutils/types/Objectify
 */

import type EmptyObject from './empty-object'
import type { tag as empty } from './empty-object'
import type IsAny from './is-any'
import type IsNever from './is-never'
import type NIL from './nil'
import type Opaque from './opaque'
import type { tag as opaque } from './opaque'
import type Primitive from './primitive'
import type PropertyKey from './property-key'

/**
 * Construct an object type from `T`.
 *
 * **Note**: Readonly index signatures are not preserved.
 *
 * @see https://github.com/microsoft/TypeScript/issues/14295#issuecomment-491023140
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
type Objectify<T> = IsAny<T> extends true
  ? Record<PropertyKey, T>
  : IsNever<T> extends true
  ? Record<PropertyKey & T, T>
  : T extends unknown
  ? {
      [K in keyof (EmptyObject extends T
        ? { [H in keyof T as H extends typeof empty ? never : H]: H }
        : T extends NIL
        ? Record<never, never>
        : T extends Opaque<unknown>
        ? T
        : T extends Primitive
        ? {
            [H in keyof Opaque<T> as H extends typeof opaque ? never : H]: H
          }
        : T)]: K extends keyof T ? T[K] : never
    }
  : never

export type { Objectify as default }
