/**
 * @file Type Definitions - EmptyObject
 * @module tutils/types/EmptyObject
 */

import type IndexSignature from './index-signature'

/**
 * An empty object.
 */
type EmptyObject = Record<IndexSignature, never>

export type { EmptyObject as default }
