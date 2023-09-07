/**
 * @file Type Definitions - IsUniqueSymbol
 * @module tutils/types/IsUniqueSymbol
 */

import type IfAnyOrNever from './if-any-or-never'

/**
 * Returns a boolean indicating if `T` is a type of `unique symbol`.
 *
 * @example
 *  type X = IsSymbol<keyof EmptyObject>
 *  // true
 * @example
 *  type X = IsSymbol<keyof Integer>
 *  // boolean
 * @example
 *  type X = IsSymbol<symbol>
 *  // false
 * @example
 *  type X = IsSymbol<any>
 *  // false
 * @example
 *  type X = IsSymbol<never>
 *  // false
 * @example
 *  type X = IsSymbol<unknown>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsUniqueSymbol<T> = IfAnyOrNever<
  T,
  false,
  // dprint-ignore
  T extends symbol
    ? symbol extends T
      ? false
      : T extends object
      ? false
      : true
    : false
>

export type { IsUniqueSymbol as default }
