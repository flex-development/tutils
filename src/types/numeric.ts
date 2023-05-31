/**
 * @file Type Definitions - Numeric
 * @module tutils/types/Numeric
 */

import type Stringify from './stringify'

/**
 * A string that contains only numbers (not including the leading `-` if the
 * numeric is negative).
 */
type Numeric = Stringify<number>

export type { Numeric as default }
