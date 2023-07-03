/**
 * @file Type Definitions - Fallback
 * @module tutils/types/Fallback
 */

/**
 * Fallback value helper.
 *
 * Resolves to `Exclude<T, C> | F` if `T` extends `C`, or `T` otherwise.
 *
 * @example
 *  type X = Fallback<string | undefined, number>
 *  // number | string
 * @example
 *  type X = Fallback<Nilable<string>, number, NIL>
 *  // number | string
 * @example
 *  type X = Fallback<string | undefined, never>
 *  // number
 * @example
 *  type X = Fallback<number, string>
 *  // number
 *
 * @template T - Type to evaluate
 * @template F - Fallback value type
 * @template C - Fallback condition type
 */
type Fallback<T, F, C = undefined> = T extends C ? Exclude<T, C> | F : T

export type { Fallback as default }
