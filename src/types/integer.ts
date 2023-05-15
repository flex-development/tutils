/**
 * @file Type Definitions - Integer
 * @module tutils/types/Integer
 */

import type Opaque from './opaque'

/**
 * A number that can be negative, positive, or zero, but not a fraction (i.e.
 * cannot have a decimal point).
 *
 * @see https://computersciencewiki.org/index.php/int
 */
type Integer = Opaque<number, 'integer'>

export type { Integer as default }
