/**
 * @file Utilities - trimEnd
 * @module tutils/utils/trimEnd
 */

import type { TrimEnd } from '#src/types'

/**
 * Removes trailing whitespace characters from a string.
 *
 * @see {@linkcode TrimEnd}
 *
 * @todo examples
 *
 * @template T - String to trim
 *
 * @param {T} str - String to trim
 * @return {TrimEnd<T>} `str` with trailing whitespaces removed
 */
const trimEnd = <T extends string>(str: T): TrimEnd<T> => str.trimEnd<T>()

export default trimEnd
