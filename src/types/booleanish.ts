/**
 * @file Type Definitions - Booleanish
 * @module tutils/types/Booleanish
 */

import type Stringify from './stringify'

/**
 * Constructs a union of types that represent `true` or `false`.
 */
type Booleanish = Stringify<boolean> | boolean | 0 | 1

export type { Booleanish as default }
