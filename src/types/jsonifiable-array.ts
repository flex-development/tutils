/**
 * @file Type Definitions - JsonifiableArray
 * @module tutils/types/JsonifiableArray
 */

import type Jsonifiable from './jsonifiable'

/**
 * Matches an array whose items can be losslessly converted to JSON.
 *
 * @see [`Jsonifiable`]({@link ./jsonifiable.ts})
 */
type JsonifiableArray = readonly Jsonifiable[]

export type { JsonifiableArray as default }
