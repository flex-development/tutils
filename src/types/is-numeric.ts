/**
 * @file Type Definitions - IsNumeric
 * @module tutils/types/IsNumeric
 */

import type Numeric from './numeric'

/**
 * Returns a boolean indicating if `T` extends {@linkcode Numeric}.
 *
 * @template T - Type to evaluate
 */
type IsNumeric<T> = T extends Numeric ? true : false

export type { IsNumeric as default }
