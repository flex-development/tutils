/**
 * @file Type Definitions - IsFalse
 * @module tutils/types/IsFalse
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is `false`.
 *
 * @template T - Type to evaluate
 */
type IsFalse<T> = IfAnyOrNever<T, false, [T] extends [false] ? true : false>

export type { IsFalse as default }
