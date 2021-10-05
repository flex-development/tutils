import type { IndexSignature } from './IndexSignature'

/**
 * @file Type Definitions - ObjectUnknown
 * @module tutils/types/ObjectUnknown
 */

/**
 * Type representing any object.
 */
export type ObjectUnknown = { [Key in IndexSignature]?: unknown }
