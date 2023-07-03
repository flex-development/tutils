/**
 * @file Type Definitions - TrimStart
 * @module tutils/types/TrimStart
 */

import type IfAny from './if-any'
import type Whitespace from './whitespace'

/**
 * Removes leading whitespaces from string `T`.
 *
 * @see {@linkcode Whitespace}
 *
 * @example
 *  type X = TrimStart<' hello, world'>
 *  // 'hello, world'
 * @example
 *  type X = TrimStart<'hello '>
 *  // 'hello '
 * @example
 *  type X = TrimStart<'world'>
 *  // 'world'
 * @example
 *  type X = TrimStart<any>
 *  // string
 * @example
 *  type X = TrimStart<never>
 *  // never
 *
 * @template T - String to trim
 */
type TrimStart<T extends string> = T extends `${Whitespace}${infer Rest}`
  ? TrimStart<Rest>
  : IfAny<T, string, T>

export type { TrimStart as default }
