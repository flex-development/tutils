/**
 * @file Utilities - split
 * @module tutils/utils/split
 */

import type { Nilable, Optional, Split } from '#src/types'
import cast from './cast'
import isNIL from './is-nil'

/**
 * Converts a string into a substring array.
 *
 * If a separator string or pattern is not provided, the substring array will
 * only contain the given string.
 *
 * @see {@linkcode Split}
 *
 * @todo examples
 *
 * @template T - String to split
 * @template S - String separator
 *
 * @param {T} str - String to split
 * @param {S} [separator] - String or regular expression used to separate `str`
 * @param {Nilable<number>} [limit] - Max substring array length
 * @return {Split<T, S>} Substring array
 */
const split = <T extends Nilable<string>, S extends Optional<RegExp | string>>(
  str: T,
  separator?: S,
  limit?: Nilable<number>
): Split<T, S> => {
  return cast(isNIL(str) ? [] : str.split(separator, limit ?? undefined))
}

export default split
