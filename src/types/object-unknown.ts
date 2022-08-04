/**
 * @file Type Definitions - ObjectUnknown
 * @module tutils/types/ObjectUnknown
 */

import type IndexSignature from './index-signature'

/**
 * Type representing any object.
 */
type ObjectUnknown = { [Key in IndexSignature]?: unknown }

export { type ObjectUnknown as default }