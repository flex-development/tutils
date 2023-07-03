/**
 * @file Type Definitions - IsAny
 * @module tutils/types/IsAny
 */

/**
 * Returns a boolean indicating if `T` is `any`.
 *
 * @example
 *  type X = IsAny<any>
 *  // true
 * @example
 *  type X = IsAny<never>
 *  // false
 * @example
 *  type X = IsAny<unknown>
 *  // false
 * @example
 *  type X = IsAny<string>
 *  // false
 *
 * @template T - Type to evaluate
 */
type IsAny<T> = 0 extends T & 1 ? true : false

export type { IsAny as default }
