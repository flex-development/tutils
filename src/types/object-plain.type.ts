/**
 * @file Type Definitions - ObjectPlain
 * @module tutils/types/ObjectPlain
 */

import type IndexSignature from './index-signature.type'

/**
 * Type representing any plain object (`{}`) value.
 */
type ObjectPlain = { [Key in IndexSignature]?: any }

export default ObjectPlain
