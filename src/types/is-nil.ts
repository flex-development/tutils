/**
 * @file Type Definitions - IsNil
 * @module tutils/types/IsNil
 */

import type IfAnyOrNever from './if-any-or-never'
import type NIL from './nil'

/**
 * Returns a boolean indicating if `T` extends {@linkcode NIL}.
 *
 * @example
 *  type X = IsNil<null>
 *  // true
 * @example
 *  type X = IsNil<undefined>
 *  // true
 * @example
 *  type X = IsNil<NIL>
 *  // true
 * @example
 *  type X = IsNil<Nilable<string>>
 *  // boolean
 * @example
 *  type X = IsNil<any>
 *  // false
 * @example
 *  type X = IsNil<never>
 *  // false
 * @example
 *  type X = IsNil<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsNil<T> = IfAnyOrNever<T, false, T extends NIL ? true : false>

export type { IsNil as default }
