/**
 * @file Type Definitions - IsObjectPlain
 * @module tutils/types/IsObjectPlain
 */

import type IfAnyOrNever from './if-any-or-never'
import type ObjectPlain from './object-plain'

/**
 * Returns a boolean indicating if `T` extends {@linkcode ObjectPlain}.
 *
 * @example
 *  type X = IsObjectPlain<{ hello: 'world' }>
 *  // true
 * @example
 *  interface Data { hello: 'world' }
 *  type X = IsObjectPlain<Simplify<Data>>
 *  // true
 * @example
 *  type X = IsObjectPlain<Nilable<{ hello: 'world' }>>
 *  // boolean
 * @example
 *  type X = IsObjectPlain<Fn>
 *  // false
 * @example
 *  type X = IsObjectPlain<readonly unknown[]>
 *  // false
 * @example
 *  type X = IsObjectPlain<any>
 *  // false
 * @example
 *  type X = IsObjectPlain<never>
 *  // false
 * @example
 *  type X = IsObjectPlain<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsObjectPlain<T> = IfAnyOrNever<
  T,
  false,
  T extends ObjectPlain ? true : false
>

export type { IsObjectPlain as default }
