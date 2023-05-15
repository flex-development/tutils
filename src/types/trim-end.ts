/**
 * @file Type Definitions - TrimEnd
 * @module tutils/types/TrimEnd
 */

import type Whitespace from './whitespace'

/**
 * Removes trailing whitespaces from string `T`.
 *
 * @see {@linkcode Whitespace}
 *
 * @template T - String to trim
 */
type TrimEnd<T extends string> = T extends `${infer Rest}${Whitespace}`
  ? TrimEnd<Rest>
  : T

export type { TrimEnd as default }
