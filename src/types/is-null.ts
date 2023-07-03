/**
 * @file Type Definitions - IsNull
 * @module tutils/types/IsNull
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends `null`.
 *
 * @example
 *  type X = IsNull<null>
 *  // true
 * @example
 *  type X = IsNull<NIL>
 *  // boolean
 * @example
 *  type X = IsNull<any>
 *  // false
 * @example
 *  type X = IsNull<never>
 *  // false
 * @example
 *  type X = IsNull<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsNull<T> = IfAnyOrNever<T, false, T extends null ? true : false>

export type { IsNull as default }
