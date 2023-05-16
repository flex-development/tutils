/**
 * @file Utilities - uppercase
 * @module tutils/utils/uppercase
 */

import type { OneOrMany } from '#src/types'

/**
 * Converts all alphabetic characters in `string` to uppercase.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *
 * @template T - String to convert
 *
 * @param {T} string - String to convert
 * @param {OneOrMany<string> | undefined} [locales] - Locales to consider
 * @return {Uppercase<T>} Uppercase `string`
 */
function uppercase<T extends string>(
  string: T,
  locales?: OneOrMany<string> | undefined
): Uppercase<T> {
  return string.toLocaleUpperCase<T>(locales)
}

export default uppercase
