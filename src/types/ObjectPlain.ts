import type { IndexSignature } from './IndexSignature'

/**
 * @file Type Definitions - ObjectPlain
 * @module tutils/types/ObjectPlain
 */

/**
 * Type representing any plain object (`{}`) value.
 */
export type ObjectPlain = { [Key in IndexSignature]?: any }
