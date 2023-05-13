/**
 * @file Type Definitions - IsNil
 * @module tutils/types/IsNil
 */

import type NIL from './nil'

/**
 * Returns a boolean indicating if `T` extends {@linkcode NIL}.
 *
 * @template T - Type to evaluate
 */
type IsNil<T> = T extends NIL ? true : false

export type { IsNil as default }
