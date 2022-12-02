/**
 * @file Type Definitions - JsonifiableObject
 * @module tutils/types/JsonifiableObject
 */

import type Jsonifiable from './jsonifiable'

/**
 * Matches an object whose items can be losslessly converted to JSON.
 *
 * @see [`Jsonifiable`]({@link ./jsonifiable.ts})
 */
type JsonifiableObject =
  | { [K in string]?: Jsonifiable }
  | { toJSON(): Jsonifiable }

export type { JsonifiableObject as default }
