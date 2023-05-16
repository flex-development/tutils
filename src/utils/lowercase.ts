/**
 * @file Utilities - lowercase
 * @module tutils/utils/lowercase
 */

import type { OneOrMany } from '#src/types'

/**
 * Converts all alphabetic characters in `string` to lowercase.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 *
 * @template T - String to convert
 *
 * @param {T} string - String to convert
 * @param {OneOrMany<string> | undefined} [locales] - Locales to consider
 * @return {Lowercase<T>} Lowercase `string`
 */
function lowercase<T extends string>(
  string: T,
  locales?: OneOrMany<string> | undefined
): Lowercase<T> {
  return string.toLocaleLowerCase<T>(locales)
}

export default lowercase
