/**
 * @file Type Definitions - JsonifiableInstance
 * @module tutils/types/JsonifiableInstance
 */

import type Jsonifiable from './jsonifiable'

/**
 * An object with a `toJSON` method.
 *
 * When invoked, the object can be losslessly converted to JSON.
 *
 * @see [`Jsonifiable`]({@link ./jsonifiable.ts})
 */
type JsonifiableInstance = { toJSON(): Jsonifiable }

export type { JsonifiableInstance as default }
