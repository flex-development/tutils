/**
 * @file Utilities - trimStart
 * @module tutils/utils/trimStart
 */

import type { TrimStart } from '#src/types'

/**
 * Removes leading whitespace characters from a string.
 *
 * @see {@linkcode TrimStart}
 *
 * @todo examples
 *
 * @template T - String to trim
 *
 * @param {T} str - String to trim
 * @return {TrimStart<T>} `str` with leading whitespaces removed
 */
const trimStart = <T extends string>(str: T): TrimStart<T> => {
  return str.trimStart<T>()
}

export default trimStart
