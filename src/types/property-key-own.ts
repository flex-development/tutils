/**
 * @file Type Definitions - OwnPropertyKey
 * @module tutils/types/OwnPropertyKey
 */

import type PropertyKey from './property-key'

/**
 * An own property key.
 *
 * The own properties of an object are those that are defined directly on that
 * object, and are not inherited from the object's prototype.
 *
 * @see {@linkcode PropertyKey}
 */
type OwnPropertyKey = Exclude<PropertyKey, number>

export type { OwnPropertyKey as default }
