/**
 * @file Type Definitions - Intersection
 * @module tutils/types/Intersection
 */

/**
 * Combines `T1` and `T2`.
 *
 * @see https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#intersections
 *
 * @template T1 - Base type(s)
 * @template T2 - Type(s) to combine with `T1`
 */
type Intersection<T1 = any, T2 = any> = T1 & T2

export { type Intersection as default }
