/**
 * @file Type Definitions - JsonifiableObject
 * @module tutils/types/JsonifiableObject
 */

import type Jsonifiable from './jsonifiable'

/**
 * An object that can be losslessly converted to JSON.
 *
 * For objects with `toJSON` methods, use [`JsonifiableInstance`][1] instead.
 *
 * [1]: {@link ./jsonifiable-instance.ts}
 * [2]: {@link ./jsonifiable.ts}
 *
 * @see [`Jsonifiable`][2]
 */
type JsonifiableObject = { [K in string]?: Jsonifiable | undefined }

export type { JsonifiableObject as default }
