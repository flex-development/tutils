/**
 * @file Type Definitions - ExactOptionalKeys
 * @module tutils/types/ExactOptionalKeys
 */

import type Get from './get'
import type IfAny from './if-any'
import type IfEqual from './if-equal'
import type OptionalKeys from './keys-optional'
import type PropertyKey from './property-key'

/**
 * Construct a union of `T`'s exact optional property keys.
 *
 * @see https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes
 *
 * @example
 *  type X = ExactOptionalKeys<{ id: string; name?: string }>
 *  // 'name'
 * @example
 *  type X = ExactOptionalKeys<{ id: string; name: string | undefined }>
 *  // never
 * @example
 *  type X = ExactOptionalKeys<['a', 'b', 'c'?]>
 *  // -1 | 2
 * @example
 *  type X = ExactOptionalKeys<['a', 'b', 'c']>
 *  // -never
 * @example
 *  type X = ExactOptionalKeys<string & { id?: string }>
 *  // 'id'
 * @example
 *  type X = ExactOptionalKeys<string[]>
 *  // never
 * @example
 *  type X = ExactOptionalKeys<'abc'>
 *  // never
 * @example
 *  type X = ExactOptionalKeys<string>
 *  // never
 *
 * @template T - Type to evaluate
 */
type ExactOptionalKeys<T> = IfAny<
  T,
  never,
  T extends unknown
    ? Extract<
        OptionalKeys<T> extends infer K extends keyof T
          ? {
              [H in K]: IfEqual<Get<T, H>, Get<Required<T>, H>, never, H>
            } extends infer X
            ? X[keyof X]
            : never
          : never,
        PropertyKey
      >
    : never
>

export type { ExactOptionalKeys as default }
