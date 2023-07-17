/**
 * @file Type Definitions - HasKeys
 * @module tutils/types/HasKeys
 */

import type IfNever from './if-never'
import type Objectify from './objectify'

/**
 * Returns a boolean indicating if `T` has any keys.
 *
 * @example
 *  type X = HasKeys<{ hello: string; world: string }>
 *  // true
 * @example
 *  type X = HasKeys<readonly ['a', 'b', 'c'?]>
 *  // true
 * @example
 *  type X = HasKeys<number>
 *  // true
 * @example
 *  type X = HasKeys<{}>
 *  // false
 * @example
 *  type X = HasKeys<EmptyObject>
 *  // false
 * @example
 *  type X = HasKeys<any>
 *  // true
 * @example
 *  type X = HasKeys<never>
 *  // false
 * @example
 *  type X = HasKeys<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type HasKeys<T> = IfNever<
  T,
  false,
  T extends unknown ? IfNever<keyof Objectify<T>, false, true> : false
>

export type { HasKeys as default }
