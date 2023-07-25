/**
 * @file Utilities - lowercase
 * @module tutils/utils/lowercase
 */

import type { Nilable, OneOrMany } from '#src/types'

/**
 * Converts all alphabetic characters in a string to lowercase.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
 *
 * @todo examples
 *
 * @template T - String to convert
 *
 * @param {T} str - String to convert
 * @param {Nilable<OneOrMany<string>>} [locales] - Locales to consider
 * @return {Lowercase<T>} Lowercase string
 */
const lowercase = <T extends string>(
  str: T,
  locales?: Nilable<OneOrMany<string>>
): Lowercase<T> => str.toLocaleLowerCase<T>(locales ?? undefined)

export default lowercase
