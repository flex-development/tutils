/**
 * @file Type Definitions - IsAnyOrNever
 * @module tutils/types/IsAnyOrNever
 */

import type IfAny from './if-any'
import type IfNever from './if-never'

/**
 * Returns a boolean indicating if `T` is `any` or `never`.
 *
 * @template T - Type to evaluate
 */
type IsAnyOrNever<T> = IfAny<T, true, IfNever<T, true, false>>

export type { IsAnyOrNever as default }
