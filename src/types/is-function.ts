/**
 * @file Type Definitions - IsFunction
 * @module tutils/types/IsFunction
 */

import type Fn from './fn'

/**
 * Returns a boolean indicating if `T` extends {@linkcode Fn}.
 *
 * @template T - Type to evaluate
 */
type IsFunction<T> = T extends Fn ? true : false

export type { IsFunction as default }
