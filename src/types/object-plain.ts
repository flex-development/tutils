/**
 * @file Type Definitions - ObjectPlain
 * @module tutils/types/ObjectPlain
 */

import type Primitive from './primitive'

/**
 * A plain old JavaScript object (POJO).
 *
 * @see https://masteringjs.io/tutorials/fundamentals/pojo
 */
type ObjectPlain = {
  [x: string | symbol]: Primitive | object
  readonly arguments?: never
}

export type { ObjectPlain as default }
