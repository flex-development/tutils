/**
 * @file Utilities - escape
 * @module tutils/utils/escape
 */

/**
 * Escapes HTML characters in a string.
 *
 * Conversions:
 *
 * - ampersand (`&`) -> `&amp;`
 * - greater than symbol (`>`) -> `&gt;`
 * - less than symbol (`<`) -> `&lt;`
 * - quote, double (`"`) -> `&quot;`
 * - quote, single (`'`) -> `&#39;`
 *
 * @todo examples
 *
 * @param {string} str - String containing HTML characters
 * @return {string} String with HTML characters escaped
 */
const escape = (str: string): string => {
  return str
    .replaceAll(/&/g, '&amp;')
    .replaceAll(/"/g, '&quot;')
    .replaceAll(/'/g, '&#39;')
    .replaceAll(/</g, '&lt;')
    .replaceAll(/>/g, '&gt;')
}

export default escape
