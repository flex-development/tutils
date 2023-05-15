/**
 * @file Type Definitions - Float
 * @module tutils/types/Float
 */

import type Opaque from './opaque'

/**
 * A floating point number.
 *
 * @see https://computersciencewiki.org/index.php/float
 */
type Float = Opaque<number, 'float'>

export type { Float as default }
