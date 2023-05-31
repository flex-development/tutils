/**
 * @file Type Definitions - NIL
 * @module tutils/types/nil
 */

import type Optional from './optional'

/**
 * Constructs a union of `null` and `undefined`.
 */
type NIL = Optional<null>

export type { NIL as default }
