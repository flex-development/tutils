/**
 * @file Type Definitions - Trim
 * @module tutils/types/Trim
 */

import type Stringify from './stringify'
import type TrimEnd from './trim-end'
import type TrimStart from './trim-start'

/**
 * Removes leading and trailing whitespaces from string `T`.
 *
 * @example
 *  type X = Trim<' hello, world '>
 *  // 'hello, world'
 * @example
 *  type X = Trim<'hello'>
 *  // 'hello'
 * @example
 *  type X = Trim<any>
 *  // string
 * @example
 *  type X = Trim<never>
 *  // never
 *
 * @template T - String to trim
 */
type Trim<T extends string> = Stringify<TrimStart<TrimEnd<T>>>

export type { Trim as default }
