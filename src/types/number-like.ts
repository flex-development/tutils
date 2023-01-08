/**
 * @file Type Definitions - NumberLike
 * @module tutils/types/NumberLike
 */

import type Numeric from './numeric'

/**
 * A string that contains only numbers or a number.
 */
type NumberLike = Numeric | number

export type { NumberLike as default }
