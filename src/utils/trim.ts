/**
 * @file Utilities - trim
 * @module tutils/utils/trim
 */

import type { Trim } from '#src/types'

/**
 * Removes leading and trailing whitespace characters from `string`.
 *
 * @see {@linkcode Trim}
 *
 * @template T - String to trim
 *
 * @param {T} string - String to trim
 * @return {Trim<T>} `string` with leading and trailing whitespaces removed
 */
function trim<T extends string>(string: T): Trim<T> {
  return string.trim<T>()
}

export default trim
