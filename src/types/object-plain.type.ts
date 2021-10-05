import type IndexSignature from './index-signature.type'

/**
 * @file Type Definitions - ObjectPlain
 * @module tutils/types/ObjectPlain
 */

/**
 * Type representing any plain object (`{}`) value.
 */
type ObjectPlain = { [Key in IndexSignature]?: any }

export default ObjectPlain
