/**
 * @file Type Definitions - IsSymbol
 * @module tutils/types/IsSymbol
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `symbol`.
 *
 * @example
 *  type X = IsSymbol<symbol>
 *  // true
 * @example
 *  type X = IsSymbol<Nilable<symbol>>
 *  // boolean
 * @example
 *  type X = IsSymbol<any>
 *  // false
 * @example
 *  type X = IsSymbol<never>
 *  // false
 * @example
 *  type X = IsSymbol<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsSymbol<T> = IfAnyOrNever<T, false, T extends symbol ? true : false>

export type { IsSymbol as default }
