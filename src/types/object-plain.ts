/**
 * @file Type Definitions - ObjectPlain
 * @module tutils/types/ObjectPlain
 */

import type IndexSignature from './index-signature'

/**
 * A plain object.
 */
type ObjectPlain = { [Key in IndexSignature]?: any }

export type { ObjectPlain as default }
