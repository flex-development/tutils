/**
 * @file Type Definitions - ExactOptionalPropertyTypes
 * @module tutils/types/ExactOptionalPropertyTypes
 */

import type ObjectAny from './object-any'
import type Simplify from './simplify'

/**
 * Removes `undefined` from optional properties.
 *
 * This is a workaround for [`Microsoft/TypeScript#46969`][1].
 *
 * [1]: https://github.com/Microsoft/TypeScript/issues/46969
 *
 * @template T - Type to evaluate
 */
type ExactOptionalPropertyTypes<T extends ObjectAny> = Simplify<{
  [K in keyof T]: Exclude<T[K], undefined> extends never
    ? T[K]
    : Exclude<T[K], undefined>
}>

export type { ExactOptionalPropertyTypes as default }
