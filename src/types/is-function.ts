/**
 * @file Type Definitions - IsFunction
 * @module tutils/types/IsFunction
 */

import type Fn from './fn'
import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` extends {@linkcode Fn}.
 *
 * @example
 *  type X = IsFunction<Function>
 *  // true
 * @example
 *  type X = IsFunction<Fn>
 *  // true
 * @example
 *  type X = IsFunction<Readonly<Fn>>
 *  // true
 * @example
 *  type X = IsFunction<Fn['caller']>
 *  // true
 * @example
 *  type X = IsFunction<(n: number) => string>
 *  // true
 * @example
 *  type X = IsFunction<Nilable<Fn>>
 *  // boolean
 * @example
 *  type X = IsFunction<any>
 *  // false
 * @example
 *  type X = IsFunction<never>
 *  // false
 * @example
 *  type X = IsFunction<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsFunction<T> = IfAnyOrNever<
  T,
  false,
  T extends Readonly<Fn> ? true : false
>

export type { IsFunction as default }
