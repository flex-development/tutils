/**
 * @file Type Definitions - OrNever
 * @module tutils/types/OrNever
 */

/**
 * Represents data returned by a function, or the return type of a function that
 * never returns a value because an error was thrown.
 *
 * @template T - Return value
 */
type OrNever<T> = T | never

export default OrNever
