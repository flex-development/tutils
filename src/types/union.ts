/**
 * @file Type Definitions - Union
 * @module tutils/types/Union
 */

/**
 * Allow `T1` or `T2`.
 *
 * @template T1 - Type(s) to allow
 * @template T2 - Type(s) to allow in addition to `T1`
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 * @see https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions
 */
type Union<T1 = any, T2 = any> = T1 | T2

export { type Union as default }
