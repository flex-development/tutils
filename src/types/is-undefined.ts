/**
 * @file Type Definitions - IsUndefined
 * @module tutils/types/IsUndefined
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `undefined`.
 *
 * @example
 *  type X = IsUndefined<undefined>
 *  // true
 * @example
 *  type X = IsUndefined<NIL>
 *  // boolean
 * @example
 *  type X = IsUndefined<any>
 *  // false
 * @example
 *  type X = IsUndefined<never>
 *  // false
 * @example
 *  type X = IsUndefined<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsUndefined<T> = IfAnyOrNever<T, false, T extends undefined ? true : false>

export type { IsUndefined as default }
