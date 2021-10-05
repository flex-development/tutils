/**
 * @file Type Definitions - OneOrMany
 * @module tutils/types/OneOrMany
 */

/**
 * Restricts a type to type `T` or an array of `T` values.
 *
 * @template T - Value type
 */
type OneOrMany<T> = T | Array<T>

export default OneOrMany
