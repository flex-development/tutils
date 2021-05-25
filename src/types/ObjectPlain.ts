import type { IndexSignature } from './IndexSignature'

/**
 * @file Types - ObjectPlain
 * @module types/ObjectPlain
 */

/**
 * Type representing any plain object (`{}`) value.
 */
export type ObjectPlain = { [Key in IndexSignature]?: any }
