/**
 * @file Type Definitions - Fn
 * @module tutils/types/Fn
 */

/**
 * A function.
 *
 * @template A - Arguments type
 * @template R - Return type
 */
type Fn<A extends any[] = any[], R = any> = Function & ((...args: A) => R)

export type { Fn as default }
