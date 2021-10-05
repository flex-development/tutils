/**
 * @file Type Definitions - OrPromise
 * @module tutils/types/OrPromise
 */

/**
 * Type representing an asynchronous or synchronous value.
 *
 * @template T - Value type
 */
type OrPromise<T> = T | Promise<T>

export default OrPromise
