/**
 * @file Type Definitions - IsObjectCurly
 * @module tutils/types/IsObjectCurly
 */

import type IfAnyOrNever from './if-any-or-never'
import type ObjectCurly from './object-curly'

/**
 * Returns a boolean indicating if `T` extends {@linkcode ObjectCurly}.
 *
 * @example
 *  type X = IsObjectCurly<{ hello: 'world' }>
 *  // true
 * @example
 *  type X = IsObjectCurly<Nilable<{ hello: 'world' }>>
 *  // boolean
 * @example
 *  type X = IsObjectCurly<Fn>
 *  // false
 * @example
 *  type X = IsObjectCurly<readonly unknown[]>
 *  // false
 * @example
 *  type X = IsObjectCurly<any>
 *  // false
 * @example
 *  type X = IsObjectCurly<never>
 *  // false
 * @example
 *  type X = IsObjectCurly<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsObjectCurly<T> = IfAnyOrNever<
  T,
  false,
  T extends ObjectCurly ? true : false
>

export type { IsObjectCurly as default }
