/**
 * @file Type Definitions - NumberLike
 * @module tutils/types/NumberLike
 */

import type Numeric from './numeric'
import type NegativeNumeric from './numeric-negative'

/**
 * A number, or a string that contains only numbers.
 *
 * @see {@linkcode NegativeNumeric}
 * @see {@linkcode Numeric}
 */
type NumberLike = NegativeNumeric | Numeric | number

export type { NumberLike as default }
