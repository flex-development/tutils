/**
 * @file Utilities - capitalize
 * @module tutils/utils/capitalize
 */

import isCapitalized from './is-capitalized'
import uppercase from './uppercase'

/**
 * Capitalizes the first character in `string`.
 *
 * @template T - String to capitalize
 *
 * @param {string} string - String to capitalize
 * @return {Capitalize<T>} Capitalized `string`
 */
function capitalize<T extends string>(string: T): Capitalize<T> {
  return isCapitalized<T>(string)
    ? string
    : ((uppercase(string.charAt(0)) + string.slice(1)) as Capitalize<T>)
}

export default capitalize
