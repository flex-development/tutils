/**
 * @file Utilities - trimStart
 * @module tutils/utils/trimStart
 */

import type { TrimStart } from '#src/types'

/**
 * Removes leading whitespace characters from `string`.
 *
 * @see {@linkcode TrimStart}
 *
 * @template T - String to trim
 *
 * @param {T} string - String to trim
 * @return {TrimStart<T>} `string` with leading whitespaces removed
 */
function trimStart<T extends string>(string: T): TrimStart<T> {
  return string.trimStart<T>()
}

export default trimStart
