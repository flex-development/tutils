/**
 * @file Utilities - split
 * @module tutils/utils/split
 */

import type { Split } from '#src/types'

/**
 * Converts `string` into a substring array using `delimiter`.
 *
 * If `delimiter` is omitted, the substring array will only contain `string`.
 *
 * @template T - String to split
 * @template Delimiter - String delimiter
 *
 * @param {T} string - String to split
 * @param {Delimiter} [delimiter] - String or regular expression identifying the
 * character or characters to use when separating `string`
 * @param {number | undefined} [limit] - Value used to limit array size
 * @return {Split<T, Delimiter>} Substring array
 */
function split<T extends string, Delimiter extends RegExp | string | undefined>(
  string: T,
  delimiter?: Delimiter,
  limit?: number | undefined
): Split<T, Delimiter> {
  return string.split<T, Delimiter>(delimiter, limit)
}

export default split
