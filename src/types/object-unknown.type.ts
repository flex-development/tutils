import type IndexSignature from './index-signature.type'

/**
 * @file Type Definitions - ObjectUnknown
 * @module tutils/types/ObjectUnknown
 */

/**
 * Type representing any object.
 */
type ObjectUnknown = { [Key in IndexSignature]?: unknown }

export default ObjectUnknown
