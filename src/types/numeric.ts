/**
 * @file Type Definitions - Numeric
 * @module tutils/types/Numeric
 */

import type Stringify from './stringify'

/**
 * A string containing only numbers (not including the leading `-` if negative).
 *
 * @example
 *  '-1'
 * @example
 *  '0'
 * @example
 *  '1'
 */
type Numeric = Stringify<number>

export type { Numeric as default }
