/**
 * @file Type Definitions - IsSymbol
 * @module tutils/types/IsSymbol
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is a `symbol`.
 *
 * @template T - Type to evaluate
 */
type IsSymbol<T> = IfAnyOrNever<T, false, [T] extends [symbol] ? true : false>

export type { IsSymbol as default }
