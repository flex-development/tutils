/**
 * @file Type Definitions - Booleanish
 * @module tutils/types/Booleanish
 */

import type Stringify from './stringify'

/**
 * Construct a union of types that represent `true` or `false`.
 */
type Booleanish = Stringify<boolean | 0 | 1> | boolean | 'n' | 'y' | 0 | 1

export type { Booleanish as default }
