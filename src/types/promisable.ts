/**
 * @file Type Definitions - Promisable
 * @module tutils/types/Promisable
 */

/**
 * Type representing an awaitable or synchronous value.
 *
 * @see https://github.com/microsoft/TypeScript/issues/31394
 *
 * @template T - Value type
 */
type Promisable<T> = PromiseLike<T> | T

export type { Promisable as default }
