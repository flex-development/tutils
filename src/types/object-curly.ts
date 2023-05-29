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
 * **Note**: Curly-braced object types **cannot** have `call` or `concat`
 * properties.
 */
type ObjectCurly = Simplify<
  { [K in PropertyKey]?: any } & { call?: never; concat?: never }
>

export type { ObjectCurly as default }
