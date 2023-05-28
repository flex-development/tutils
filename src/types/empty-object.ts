/**
 * @file Type Definitions - EmptyObject
 * @module tutils/types/EmptyObject
 */

import type PropertyKey from './property-key'

/**
 * An empty object.
 */
type EmptyObject = Record<PropertyKey, never>

export type { EmptyObject as default }
