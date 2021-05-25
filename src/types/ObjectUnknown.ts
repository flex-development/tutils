import type { IndexSignature } from './IndexSignature'

/**
 * @file Types - ObjectUnknown
 * @module types/ObjectUnknown
 */

/**
 * Type representing any object.
 */
export type ObjectUnknown = { [Key in IndexSignature]?: unknown }
