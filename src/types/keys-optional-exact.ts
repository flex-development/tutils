/**
 * @file Type Definitions - ExactOptionalKeys
 * @module tutils/types/ExactOptionalKeys
 */

import type Get from './get'
import type IsEqual from './is-equal'
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
type ExactOptionalKeys<T> = Extract<
  T extends unknown
    // dprint-ignore
    ? OptionalKeys<T> extends infer K extends keyof T
      ? K extends unknown
        ? IsEqual<Get<T, K>, Get<Required<T>, K>> extends true
          ? never
          : K
        : never
      : never
    : never,
  PropertyKey
>

export type { ExactOptionalKeys as default }
