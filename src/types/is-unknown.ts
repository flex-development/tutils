/**
 * @file Type Definitions - IsUnknown
 * @module tutils/types/IsUnknown
 */

import type IsNull from './is-null'

/**
 * Returns a boolean indicating if `T` is type `unknown`.
 *
 * @template T - Type to evaluate
 */
type IsUnknown<T> = unknown extends T
  ? IsNull<T> extends false
    ? true
    : false
  : false

export type { IsUnknown as default }
