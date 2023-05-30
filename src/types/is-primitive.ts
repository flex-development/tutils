/**
 * @file Type Definitions - IsPrimitive
 * @module tutils/types/IsPrimitive
 */

import type IfAnyOrNever from './if-any-or-never'
import type Primitive from './primitive'

/**
 * Returns a boolean indicating if `T` is a {@linkcode Primitive}.
 *
 * @template T - Type to evaluate
 */
type IsPrimitive<T> = IfAnyOrNever<
  T,
  false,
  [T] extends [Primitive] ? true : false
>

export type { IsPrimitive as default }
