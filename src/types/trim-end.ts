/**
 * @file Type Definitions - TrimEnd
 * @module tutils/types/TrimEnd
 */

import type IfAny from './if-any'
import type Whitespace from './whitespace'

/**
 * Removes trailing whitespaces from string `T`.
 *
 * @see {@linkcode Whitespace}
 *
 * @example
 *  type X = TrimEnd<'hello, world '>
 *  // 'hello, world'
 * @example
 *  type X = TrimEnd<' hello'>
 *  // ' hello'
 * @example
 *  type X = TrimEnd<'world'>
 *  // 'world'
 * @example
 *  type X = TrimEnd<any>
 *  // string
 * @example
 *  type X = TrimEnd<never>
 *  // never
 *
 * @template T - String to trim
 */
type TrimEnd<T extends string> = T extends `${infer Rest}${Whitespace}`
  ? TrimEnd<Rest>
  : IfAny<T, string, T>

export type { TrimEnd as default }
