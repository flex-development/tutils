/**
 * @file Utilities - unescape
 * @module tutils/utils/unescape
 */

/**
 * Unescapes HTML entities in a string.
 *
 * Conversions:
 *
 * - ampersand (`&amp;`) -> `&`
 * - greater than symbol (`&gt;`) -> `>`
 * - less than symbol (`&lt;`) -> `<`
 * - quote, double (`&quot;`) -> `"`
 * - quote, single (`&#39;`) -> `'`
 *
 * @todo examples
 *
 * @param {string} str - String containing HTML entities
 * @return {string} String with HTML entities unescaped
 */
const unescape = (str: string): string => {
  return str
    .replaceAll(/&gt;/g, '>')
    .replaceAll(/&lt;/g, '<')
    .replaceAll(/&#0?39;/g, '\'')
    .replaceAll(/&quot;/g, '"')
    .replaceAll(/&amp;/g, '&')
}

export default unescape
