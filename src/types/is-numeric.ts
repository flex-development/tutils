/**
 * @file Type Definitions - IsNumeric
 * @module tutils/types/IsNumeric
 */

import type IfAnyOrNever from './if-any-or-never'
import type Numeric from './numeric'
import type Trim from './trim'

/**
 * Returns a boolean indicating if `T` is a {@linkcode Numeric}.
 *
 * @see https://github.com/microsoft/TypeScript/issues/46109
 *
 * @template T - Type to evaluate
 */
type IsNumeric<T> = IfAnyOrNever<
  T,
  false,
  [T] extends [Numeric] ? ([Trim<T>] extends [T] ? true : false) : false
>

export type { IsNumeric as default }
