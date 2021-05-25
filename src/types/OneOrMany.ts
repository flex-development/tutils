/**
 * @file Types - OneOrMany
 * @module types/OneOrMany
 */

/**
 * Restricts a type to type `T` or an array of `T` values.
 *
 * @template T - Value type
 */
export type OneOrMany<T> = T | Array<T>
