/**
 * @file Types - OrNever
 * @module types/OrNever
 */

/**
 * Represents data returned by a function, or the return type of a function that
 * never returns a value because an error was thrown.
 *
 * @template T - Return value
 */
export type OrNever<T> = T | never
