/**
 * @file Type Definitions - ObjectCurly
 * @module tutils/types/ObjectCurly
 */

import type PropertyKey from './property-key'

/**
 * A curly-braced object.
 *
 * Curly-braced objects are `object` types that are **not** arrays or functions
 * (e.g. instance objects, pojos).
 *
 * **Note**: {@linkcode Symbol.hasInstance} and {@linkcode Symbol.unscopables}
 * are used to identify arrays and functions.
 */
type ObjectCurly = {
  [x: PropertyKey]: any
  readonly [Symbol.hasInstance]?: never
  readonly [Symbol.unscopables]?: never
}

export type { ObjectCurly as default }
