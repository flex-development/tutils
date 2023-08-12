/**
 * @file Type Definitions - ObjectPlain
 * @module tutils/types/ObjectPlain
 */

import type Primitive from './primitive'
import type OwnPropertyKey from './property-key-own'

/**
 * A plain old JavaScript object (POJO).
 *
 * @see https://masteringjs.io/tutorials/fundamentals/pojo
 */
type ObjectPlain = {
  [x: OwnPropertyKey]: Primitive | object
  readonly [Symbol.hasInstance]?: never
}

export type { ObjectPlain as default }
