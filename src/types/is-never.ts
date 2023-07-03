/**
 * @file Type Definitions - IsNever
 * @module tutils/types/IsNever
 */

/**
 * Returns a boolean indicating if `T` is `never`.
 *
 * @example
 *  type X = IsNever<never>
 *  // true
 * @example
 *  type X = IsNever<any>
 *  // false
 * @example
 *  type X = IsNever<unknown>
 *  // false
 * @example
 *  type X = IsNever<string>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsNever<T> = [T] extends [never] ? true : false

export type { IsNever as default }
