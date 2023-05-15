/**
 * @file Type Definitions - TrimStart
 * @module tutils/types/TrimStart
 */

import type Whitespace from './whitespace'

/**
 * Removes leading whitespaces from string `T`.
 *
 * @see {@linkcode Whitespace}
 *
 * @template T - String to trim
 */
type TrimStart<T extends string> = T extends `${Whitespace}${infer Rest}`
  ? TrimStart<Rest>
  : T

export type { TrimStart as default }
