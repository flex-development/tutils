/**
 * @file Utilities - capitalize
 * @module tutils/utils/capitalize
 */

import cast from './cast'
import isCapitalized from './is-capitalized'
import uppercase from './uppercase'

/**
 * Capitalizes the first character in a string.
 *
 * @todo examples
 *
 * @template T - String to capitalize
 *
 * @param {string} str - String to capitalize
 * @return {Capitalize<T>} Capitalized string
 */
const capitalize = <T extends string>(str: T): Capitalize<T> => {
  return isCapitalized<T>(str)
    ? str
    : cast(uppercase(str.charAt(0)) + str.slice(1))
}

export default capitalize
