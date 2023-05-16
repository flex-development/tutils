/**
 * @file Utilities - trimEnd
 * @module tutils/utils/trimEnd
 */

import type { TrimEnd } from '#src/types'

/**
 * Removes trailing whitespace characters from `string`.
 *
 * @see {@linkcode TrimEnd}
 *
 * @template T - String to trim
 *
 * @param {T} string - String to trim
 * @return {TrimEnd<T>} `string` with trailing whitespaces removed
 */
function trimEnd<T extends string>(string: T): TrimEnd<T> {
  return string.trimEnd<T>()
}

export default trimEnd
