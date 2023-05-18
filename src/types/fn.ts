/**
 * @file Type Definitions - Fn
 * @module tutils/types/Fn
 */

/**
 * A function.
 *
 * @template A - Function arguments type
 * @template R - Function return type
 */
type Fn<A extends any[] = any[], R = any> = Function & ((...args: A) => R)

export type { Fn as default }
