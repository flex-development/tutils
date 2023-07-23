/**
 * @file Utilities - trim
 * @module tutils/utils/trim
 */

import type { Trim } from '#src/types'

/**
 * Removes leading and trailing whitespace characters from a string.
 *
 * @see {@linkcode Trim}
 *
 * @todo examples
 *
 * @template T - String to trim
 *
 * @param {T} str - String to trim
 * @return {Trim<T>} `str` with leading and trailing whitespaces removed
 */
const trim = <T extends string>(str: T): Trim<T> => str.trim<T>()

export default trim
