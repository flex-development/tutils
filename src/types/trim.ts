/**
 * @file Type Definitions - Trim
 * @module tutils/types/Trim
 */

import type EnsureString from './ensure-string'
import type TrimEnd from './trim-end'
import type TrimStart from './trim-start'

/**
 * Removes leading and trailing whitespaces from string `T`.
 *
 * @see {@linkcode Whitespace}
 *
 * @template T - String to trim
 */
type Trim<T extends string> = EnsureString<TrimStart<TrimEnd<T>>>

export type { Trim as default }
