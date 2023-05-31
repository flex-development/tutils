/**
 * @file Type Definitions - Stringify
 * @module tutils/types/Stringify
 */

import type Joinable from './joinable'

/**
 * Converts `T` to a string if `T` extends {@linkcode Joinable}.
 *
 * @template T - Type to evaluate
 */
type Stringify<T> = T extends Joinable ? `${T}` : never

export type { Stringify as default }
