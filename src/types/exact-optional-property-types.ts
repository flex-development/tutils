/**
 * @file Type Definitions - ExactOptionalPropertyTypes
 * @module tutils/types/ExactOptionalPropertyTypes
 */

import type IfNever from './if-never'
import type ObjectCurly from './object-curly'
import type Simplify from './simplify'

/**
 * Removes `undefined` from optional properties.
 *
 * This is a workaround for [`Microsoft/TypeScript#46969`][1].
 *
 * [1]: https://github.com/Microsoft/TypeScript/issues/46969
 *
 * @todo examples
 *
 * @template T - Type to evaluate
 */
type ExactOptionalPropertyTypes<T extends ObjectCurly> = Simplify<{
  [K in keyof T]: Exclude<T[K], undefined> extends infer V
    ? IfNever<V, T[K], V>
    : never
}>

export type { ExactOptionalPropertyTypes as default }
