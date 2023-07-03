/**
 * @file Type Definitions - IsAnyOrNever
 * @module tutils/types/IsAnyOrNever
 */

import type IfAny from './if-any'
import type IfNever from './if-never'

/**
 * Returns a boolean indicating if `T` is `any` or `never`.
 *
 * @example
 *  type X = IsAnyOrNever<any>
 *  // true
 * @example
 *  type X = IsAnyOrNever<never>
 *  // true
 * @example
 *  type X = IsAnyOrNever<unknown>
 *  // false
 * @example
 *  type X = IsAnyOrNever<number>
 *  // false
 * @example
 *  type X = IsAnyOrNever<string>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsAnyOrNever<T> = IfAny<T, true, IfNever<T, true, false>>

export type { IsAnyOrNever as default }
