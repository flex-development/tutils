/**
 * @file Type Definitions - PropertyKey
 * @module tutils/types/PropertyKey
 */

import type NumberString from './number-string'

/**
 * A property key.
 */
type PropertyKey = Extract<NumberString | symbol, any>

export type { PropertyKey as default }
