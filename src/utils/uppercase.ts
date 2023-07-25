/**
 * @file Utilities - uppercase
 * @module tutils/utils/uppercase
 */

import type { Nilable, OneOrMany } from '#src/types'

/**
 * Converts all alphabetic characters in a string to uppercase.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
 *
 * @todo examples
 *
 * @template T - String to convert
 *
 * @param {T} str - String to convert
 * @param {Nilable<OneOrMany<string>>} [locales] - Locales to consider
 * @return {Uppercase<T>} Uppercase string
 */
const uppercase = <T extends string>(
  str: T,
  locales?: Nilable<OneOrMany<string>>
): Uppercase<T> => str.toLocaleUpperCase<T>(locales ?? undefined)

export default uppercase
