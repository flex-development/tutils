/**
 * @file Type Definitions - ObjectCurly
 * @module tutils/types/ObjectCurly
 */

import type PropertyKey from './property-key'
import type Simplify from './simplify'

/**
 * A curly-braced object.
 *
 * Curly-braced objects are `object` types that are **not** arrays or functions
 * (e.g. instance objects, pojos).
 *
 * **Note**: Curly-braced object types **cannot** have a `Symbol.unscopables` or
 * `arguments` property.
 */
type ObjectCurly = Simplify<
  {
    [Symbol.unscopables]?: never
    arguments?: never
  } & { [K in PropertyKey]?: any }
>

export type { ObjectCurly as default }
