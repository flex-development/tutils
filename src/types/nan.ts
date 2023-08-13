/**
 * @file Type Definitions - NaN
 * @module tutils/types/NaN
 */

import type Opaque from './opaque'

/**
 * A value that is not a number.
 *
 * @see {@linkcode Number.NaN}.
 */
type NaN = Opaque<number, 'NaN'>

export type { NaN as default }
