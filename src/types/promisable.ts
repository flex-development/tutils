/**
 * @file Type Definitions - Promisable
 * @module tutils/types/Promisable
 */

/**
 * An awaitable or synchronous value.
 *
 * @see https://github.com/microsoft/TypeScript/issues/31394
 *
 * @example
 *  type X = Promisable<string[]>
 *  // PromiseLike<string[]> | string[]
 *
 * @template T - Type to evalute
 */
type Promisable<T> = PromiseLike<T> | T

export type { Promisable as default }
